import { NextResponse, type NextRequest } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function GET() {
  try {
    const adminClient = createAdminClient();
    const {
      data: { users },
      error,
    } = await adminClient.auth.admin.listUsers({
      page: 1,
      perPage: 100,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const formattedUsers = users.map((u) => {
      const name =
        u.user_metadata?.name ||
        u.email?.split("@")[0].replace(/[._-]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) ||
        "Staff Member";

      const rawRole = u.user_metadata?.role || "Super Admin";
      const normalizedRole =
        rawRole === "super_admin" || rawRole === "Super Admin"
          ? "Super Admin"
          : rawRole;

      const department = u.user_metadata?.department || "Executive";

      let lastActive = "Never";
      if (u.last_sign_in_at) {
        const lastDate = new Date(u.last_sign_in_at);
        const diffMinutes = Math.floor((Date.now() - lastDate.getTime()) / 60000);
        if (diffMinutes < 5) lastActive = "Online Now";
        else if (diffMinutes < 60) lastActive = `${diffMinutes} mins ago`;
        else if (diffMinutes < 1440) lastActive = `${Math.floor(diffMinutes / 60)} hours ago`;
        else lastActive = `${Math.floor(diffMinutes / 1440)} days ago`;
      }

      return {
        id: u.id,
        name,
        email: u.email || "",
        role: normalizedRole,
        department,
        status: u.email_confirmed_at ? "ACTIVE" : "INVITED",
        lastActive,
        createdAt: u.created_at,
      };
    });

    return NextResponse.json({ users: formattedUsers });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const adminClient = createAdminClient();
    const body = await request.json();
    const { name, email, role, department, password } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const tempPassword = password || `Yatee#${Math.random().toString(36).slice(-8)}!`;

    const { data, error } = await adminClient.auth.admin.createUser({
      email,
      password: tempPassword,
      email_confirm: true,
      user_metadata: {
        name,
        role: role || "Lead Design Engineer",
        department: department || "Design & Engineering",
      },
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      user: data.user,
      tempPassword,
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Failed to create user";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const adminClient = createAdminClient();
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("id");

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    const { error } = await adminClient.auth.admin.deleteUser(userId);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Failed to delete user";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
