"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";
import {
  LayoutDashboard,
  MessageSquareText,
  Briefcase,
  BookOpen,
  PlusCircle,
  Users,
  ChevronDown,
  ChevronRight,
  LogOut,
  Building2,
  Search,
  Filter,
  Download,
  Mail,
  Phone,
  Clock,
  Plus,
  Layers,
  TrendingUp,
  Settings,
  UserCog,
  Key,
  ShieldCheck,
  Check,
  UserPlus,
  X,
  SlidersHorizontal,
  Shield,
  RefreshCw,
  Copy,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { newsArticles } from "@/data/news";
import { jobOpeningsData } from "@/data/careers";
import { JobOpening } from "@/types";

interface AdminDashboardProps {
  user: User;
  onLogout: () => void;
}

// Inquiry Data Interface
export interface Lead {
  id: string;
  created_at: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  city: string;
  projectType: string;
  areaSqFt: string;
  estTonnage: number;
  status: "NEW" | "REVIEWING" | "PROPOSAL_SENT" | "CONVERTED";
  priority: "HIGH" | "MEDIUM" | "STANDARD";
  message: string;
  assignedEngineer?: string;
}

// Candidate Data Interface
export interface Candidate {
  id: string;
  appliedDate: string;
  name: string;
  position: string;
  email: string;
  phone: string;
  experience: string;
  currentCompany: string;
  qualification: string;
  status: "NEW" | "SCREENING" | "INTERVIEW_SCHEDULED" | "SHORTLISTED" | "REJECTED";
  resumeUrl?: string;
}

// Blog Post Interface
export interface BlogPost {
  id: string;
  title: string;
  category: string;
  publishDate: string;
  readTime: string;
  author: string;
  summary: string;
  status: "PUBLISHED" | "DRAFT";
}

// Admin / Staff User Interface
export interface AdminStaffUser {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  status: "ACTIVE" | "INVITED" | "SUSPENDED" | string;
  lastActive: string;
  createdAt?: string;
}

// Role & Permission Matrix Interface
export interface RolePermissionConfig {
  id: string;
  roleName: string;
  description: string;
  userCount: number;
  badgeColor: string;
  permissions: {
    dashboard: boolean;
    viewInquiries: boolean;
    editInquiries: boolean;
    exportInquiries: boolean;
    manageJobs: boolean;
    viewCandidates: boolean;
    manageCandidates: boolean;
    publishBlogs: boolean;
    manageUsers: boolean;
    manageRoles: boolean;
  };
}

const INITIAL_INQUIRIES: Lead[] = [
  {
    id: "YTE-2026-891",
    created_at: "Today, 18:42",
    name: "Rajeshwar Sharma",
    company: "Apex Logistics & Parks India Ltd",
    email: "rajeshwar.s@apexlogistics.in",
    phone: "+91 98230 44521",
    city: "Sanand, Gujarat",
    projectType: "Multi-Span Logistics Warehouse",
    areaSqFt: "145,000 sq.ft",
    estTonnage: 1250,
    status: "NEW",
    priority: "HIGH",
    message: "Requirement for 3 warehouses with clear heights of 12m and FM2 flooring tolerance. Need turnkey quote within 5 days.",
    assignedEngineer: "Er. Amit Panchal",
  },
  {
    id: "YTE-2026-890",
    created_at: "Today, 14:15",
    name: "Vikramaditya Patel",
    company: "Sterling Agro-Tech Foods Pvt Ltd",
    email: "vpatel@sterlingagro.com",
    phone: "+91 94250 88102",
    city: "Pithampur, Madhya Pradesh",
    projectType: "Heavy Industrial Shed (15T Crane)",
    areaSqFt: "65,000 sq.ft",
    estTonnage: 580,
    status: "REVIEWING",
    priority: "HIGH",
    message: "Looking for 30m clear span structure with double gantry crane brackets (15MT & 10MT capacity).",
    assignedEngineer: "Er. Sanjay Rathod",
  },
  {
    id: "YTE-2026-889",
    created_at: "Yesterday, 11:30",
    name: "Mahesh Choudhary",
    company: "Maruti Auto Components Ancillary",
    email: "mahesh@marutiancillary.co.in",
    phone: "+91 98930 12345",
    city: "Mehsana Highway, Gujarat",
    projectType: "Precision Manufacturing Facility",
    areaSqFt: "92,000 sq.ft",
    estTonnage: 780,
    status: "PROPOSAL_SENT",
    priority: "MEDIUM",
    message: "Pre-engineered factory shed with mezzanine floor provision for tool room and QA laboratories.",
    assignedEngineer: "Er. Priyanshu Dave",
  },
  {
    id: "YTE-2026-888",
    created_at: "15 Sep 2026",
    name: "Anand R. Verma",
    company: "Verma Cold Chain Logistics Hub",
    email: "anand.verma@vermacoldchain.com",
    phone: "+91 97245 99014",
    city: "Indore Bypass, MP",
    projectType: "Temperature Controlled Cold Storage",
    areaSqFt: "55,000 sq.ft",
    estTonnage: 490,
    status: "CONVERTED",
    priority: "HIGH",
    message: "PIR insulated sandwich panel PEB structure. Advance payment received. Moving to fabrication phase.",
    assignedEngineer: "Er. Amit Panchal",
  },
  {
    id: "YTE-2026-887",
    created_at: "14 Sep 2026",
    name: "Gaurav Singhal",
    company: "Singhal Textile Mills Ltd",
    email: "g.singhal@singhalgroup.com",
    phone: "+91 93012 88419",
    city: "Surat, Gujarat",
    projectType: "Textile Processing & Weaving Shed",
    areaSqFt: "110,000 sq.ft",
    estTonnage: 950,
    status: "REVIEWING",
    priority: "STANDARD",
    message: "Requires monitor roof with continuous gravity ridge ventilators for high air changes.",
    assignedEngineer: "Er. Sanjay Rathod",
  },
];

const INITIAL_CANDIDATES: Candidate[] = [
  {
    id: "CAN-2026-104",
    appliedDate: "Today, 17:20",
    name: "Siddharth N. Joshi",
    position: "Senior Structural Design Engineer (PEB)",
    email: "siddharth.joshi@gmail.com",
    phone: "+91 98260 77123",
    experience: "7.5 Years",
    currentCompany: "Kirby Building Systems (India)",
    qualification: "M.Tech Structural Engineering (VNIT Nagpur)",
    status: "INTERVIEW_SCHEDULED",
  },
  {
    id: "CAN-2026-103",
    appliedDate: "Yesterday, 15:40",
    name: "Pooja K. Dave",
    position: "Lead Tekla Structural Detailer / Checker",
    email: "pooja.dave@outlook.com",
    phone: "+91 94088 65432",
    experience: "6 Years",
    currentCompany: "Tata Projects Steel Div",
    qualification: "B.E. Civil Engineering (LDCE Ahmedabad)",
    status: "SCREENING",
  },
  {
    id: "CAN-2026-102",
    appliedDate: "15 Sep 2026",
    name: "Rohan V. Deshmukh",
    position: "Manager – Plant Quality Assurance & QC",
    email: "rohan.deshmukh@yahoo.com",
    phone: "+91 97654 32109",
    experience: "9 Years",
    currentCompany: "Pennar Industries Ltd",
    qualification: "B.Tech Mechanical + ASNT Level II",
    status: "SHORTLISTED",
  },
  {
    id: "CAN-2026-101",
    appliedDate: "13 Sep 2026",
    name: "Kunal Bansal",
    position: "Erection & Project Site Safety Lead",
    email: "kunal.bansal@rediffmail.com",
    phone: "+91 98112 34567",
    experience: "5 Years",
    currentCompany: "Everest Industries",
    qualification: "Diploma Civil + NEBOSH IGC",
    status: "NEW",
  },
];

const INITIAL_BLOGS: BlogPost[] = newsArticles.map((article, idx) => ({
  id: `BLOG-00${idx + 1}`,
  title: article.title,
  category: article.category,
  publishDate: article.publishDate,
  readTime: article.readTime,
  author: article.author.name,
  summary: article.summary,
  status: "PUBLISHED",
}));

const INITIAL_ROLES: RolePermissionConfig[] = [
  {
    id: "ROLE-1",
    roleName: "Super Admin",
    description: "Root level unrestricted authority across database, users, RBAC, and all modules.",
    userCount: 1,
    badgeColor: "bg-red-500/20 text-red-300 border-red-500/40",
    permissions: {
      dashboard: true,
      viewInquiries: true,
      editInquiries: true,
      exportInquiries: true,
      manageJobs: true,
      viewCandidates: true,
      manageCandidates: true,
      publishBlogs: true,
      manageUsers: true,
      manageRoles: true,
    },
  },
  {
    id: "ROLE-2",
    roleName: "Lead Design Engineer",
    description: "Structural proposal estimation, RFQ inspection, steel tonnage calculations, and design status.",
    userCount: 2,
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/40",
    permissions: {
      dashboard: true,
      viewInquiries: true,
      editInquiries: true,
      exportInquiries: true,
      manageJobs: false,
      viewCandidates: false,
      manageCandidates: false,
      publishBlogs: false,
      manageUsers: false,
      manageRoles: false,
    },
  },
  {
    id: "ROLE-3",
    roleName: "HR / Recruitment Lead",
    description: "Career openings management, job vacancy publishing, candidate ATS screening, and interviews.",
    userCount: 1,
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
    permissions: {
      dashboard: true,
      viewInquiries: false,
      editInquiries: false,
      exportInquiries: false,
      manageJobs: true,
      viewCandidates: true,
      manageCandidates: true,
      publishBlogs: false,
      manageUsers: false,
      manageRoles: false,
    },
  },
  {
    id: "ROLE-4",
    roleName: "Technical Content Editor",
    description: "Authoring, editing, and publishing engineering whitepapers, case studies, and corporate news.",
    userCount: 1,
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    permissions: {
      dashboard: true,
      viewInquiries: false,
      editInquiries: false,
      exportInquiries: false,
      manageJobs: false,
      viewCandidates: false,
      manageCandidates: false,
      publishBlogs: true,
      manageUsers: false,
      manageRoles: false,
    },
  },
  {
    id: "ROLE-5",
    roleName: "Plant Operations Lead",
    description: "Gujarat plant manufacturing capacity tracking, fabrication bays monitoring, and dispatch.",
    userCount: 0,
    badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/40",
    permissions: {
      dashboard: true,
      viewInquiries: true,
      editInquiries: false,
      exportInquiries: false,
      manageJobs: false,
      viewCandidates: false,
      manageCandidates: false,
      publishBlogs: false,
      manageUsers: false,
      manageRoles: false,
    },
  },
];

type ActiveNav =
  | "dashboard"
  | "enquiry"
  | "career-new"
  | "career-candidates"
  | "blogs"
  | "settings-users"
  | "settings-roles";

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ user, onLogout }) => {
  const [activeNav, setActiveNav] = useState<ActiveNav>("dashboard");
  const [careerMenuOpen, setCareerMenuOpen] = useState(true);
  const [settingsMenuOpen, setSettingsMenuOpen] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // Data States
  const [leads, setLeads] = useState<Lead[]>(INITIAL_INQUIRIES);
  const [candidates, setCandidates] = useState<Candidate[]>(INITIAL_CANDIDATES);
  const [blogs, setBlogs] = useState<BlogPost[]>(INITIAL_BLOGS);
  const [jobPostings, setJobPostings] = useState(jobOpeningsData);
  const [usersList, setUsersList] = useState<AdminStaffUser[]>([]);
  const [isLoadingUsers, setIsLoadingUsers] = useState(true);
  const [usersError, setUsersError] = useState<string | null>(null);
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [createdUserCreds, setCreatedUserCreds] = useState<{
    email: string;
    tempPassword?: string;
  } | null>(null);
  const [copiedPassword, setCopiedPassword] = useState(false);
  const [rolesList, setRolesList] = useState<RolePermissionConfig[]>(INITIAL_ROLES);

  // Search & Filters
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  // Modals
  const [showNewJobModal, setShowNewJobModal] = useState(false);
  const [showNewBlogModal, setShowNewBlogModal] = useState(false);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [showAddRoleModal, setShowAddRoleModal] = useState(false);

  // New Job Post Form State
  const [newJob, setNewJob] = useState<{
    title: string;
    department: JobOpening["department"];
    location: string;
    experienceRequired: string;
    openingsCount: number;
    summary: string;
    skills: string;
  }>({
    title: "",
    department: "Design & Structural Engineering",
    location: "Corporate Office, Indore (Hybrid)",
    experienceRequired: "3–6 Years",
    openingsCount: 2,
    summary: "",
    skills: "",
  });

  // New Blog Post Form State
  const [newBlog, setNewBlog] = useState({
    title: "",
    category: "Technical Article",
    readTime: "5 min read",
    author: user.email?.split("@")[0] || "Chief Structural Engineer",
    summary: "",
  });

  // New User Form State
  const [newUser, setNewUser] = useState<{
    name: string;
    email: string;
    password?: string;
    role: string;
    department: string;
  }>({
    name: "",
    email: "",
    password: "",
    role: "Lead Design Engineer",
    department: "Design & Engineering",
  });

  // New Role Form State
  const [newRole, setNewRole] = useState({
    roleName: "",
    description: "",
  });

  const supabase = createClient();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Fetch real users from Supabase Auth via Admin API
  const fetchUsers = useCallback(async () => {
    setIsLoadingUsers(true);
    setUsersError(null);
    try {
      const res = await fetch("/api/admin/users");
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to load users from database");
      }
      setUsersList(data.users || []);
    } catch (err: unknown) {
      console.error("Error fetching users from database:", err);
      setUsersError(err instanceof Error ? err.message : "Error loading users");
    } finally {
      setIsLoadingUsers(false);
    }
  }, []);

  useEffect(() => {
    let isMounted = true;
    const initialLoad = async () => {
      try {
        const res = await fetch("/api/admin/users");
        const data = await res.json();
        if (isMounted) {
          if (res.ok) {
            setUsersList(data.users || []);
          } else {
            setUsersError(data.error || "Failed to load users from database");
          }
        }
      } catch (err: unknown) {
        if (isMounted) {
          setUsersError(err instanceof Error ? err.message : "Error loading users");
        }
      } finally {
        if (isMounted) {
          setIsLoadingUsers(false);
        }
      }
    };

    initialLoad();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await supabase.auth.signOut();
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      setIsLoggingOut(false);
      onLogout();
    }
  };

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesSearch =
        lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.projectType.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === "ALL" || lead.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [leads, searchQuery, statusFilter]);

  const stats = useMemo(() => {
    const totalTonnage = leads.reduce((acc, l) => acc + (l.estTonnage || 0), 0);
    const newInquiries = leads.filter((l) => l.status === "NEW").length;
    const totalCandidates = candidates.length;
    const totalJobs = jobPostings.length;
    const totalBlogs = blogs.length;
    const totalUsers = usersList.length;
    const totalRoles = rolesList.length;
    return { totalTonnage, newInquiries, totalCandidates, totalJobs, totalBlogs, totalUsers, totalRoles };
  }, [leads, candidates, jobPostings, blogs, usersList, rolesList]);

  // Lead Status Updater
  const handleUpdateLeadStatus = (id: string, newStatus: Lead["status"]) => {
    setLeads((prev) =>
      prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
    );
    if (selectedLead?.id === id) {
      setSelectedLead((prev) => (prev ? { ...prev, status: newStatus } : null));
    }
  };

  // Create Job Handler
  const handleCreateJob = (e: React.FormEvent) => {
    e.preventDefault();
    const newOpening: JobOpening = {
      slug: newJob.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      title: newJob.title,
      department: newJob.department,
      location: newJob.location,
      experienceRequired: newJob.experienceRequired,
      employmentType: "Full-Time",
      openingsCount: Number(newJob.openingsCount) || 1,
      summary: newJob.summary,
      responsibilities: ["Lead engineering deliverables and project milestones per code compliance."],
      requirements: ["Relevant degree in engineering with demonstrated PEB/steel expertise."],
      skills: newJob.skills ? newJob.skills.split(",").map((s) => s.trim()) : ["Structural Steel", "PEB"],
    };
    setJobPostings([newOpening, ...jobPostings]);
    setShowNewJobModal(false);
    setNewJob({
      title: "",
      department: "Design & Structural Engineering",
      location: "Corporate Office, Indore (Hybrid)",
      experienceRequired: "3–6 Years",
      openingsCount: 2,
      summary: "",
      skills: "",
    });
  };

  // Create Blog Handler
  const handleCreateBlog = (e: React.FormEvent) => {
    e.preventDefault();
    const post: BlogPost = {
      id: `BLOG-00${blogs.length + 1}`,
      title: newBlog.title,
      category: newBlog.category,
      publishDate: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      readTime: newBlog.readTime,
      author: newBlog.author,
      summary: newBlog.summary,
      status: "PUBLISHED",
    };
    setBlogs([post, ...blogs]);
    setShowNewBlogModal(false);
    setNewBlog({
      title: "",
      category: "Technical Article",
      readTime: "5 min read",
      author: user.email?.split("@")[0] || "Chief Structural Engineer",
      summary: "",
    });
  };

  // Add User Handler via Supabase Admin API
  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreatingUser(true);
    try {
      const res = await fetch("/api/admin/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newUser.name.trim(),
          email: newUser.email.trim(),
          role: newUser.role,
          department: newUser.department,
          password: newUser.password?.trim() || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to create user in database");
      }

      if (data.tempPassword) {
        setCreatedUserCreds({
          email: newUser.email.trim(),
          tempPassword: data.tempPassword,
        });
      }

      await fetchUsers();
      setShowAddUserModal(false);
      setNewUser({
        name: "",
        email: "",
        password: "",
        role: "Lead Design Engineer",
        department: "Design & Engineering",
      });
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : "Failed to create user");
    } finally {
      setIsCreatingUser(false);
    }
  };

  // Delete User Handler via Supabase Admin API
  const handleDeleteUser = async (u: AdminStaffUser) => {
    if (confirm(`Remove user ${u.name} (${u.email}) permanently from Supabase database?`)) {
      try {
        const res = await fetch(`/api/admin/users?id=${encodeURIComponent(u.id)}`, {
          method: "DELETE",
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Failed to delete user");
        }
        await fetchUsers();
      } catch (err: unknown) {
        alert(err instanceof Error ? err.message : "Failed to delete user");
      }
    }
  };

  // Add Role Handler
  const handleAddRole = (e: React.FormEvent) => {
    e.preventDefault();
    const roleConfig: RolePermissionConfig = {
      id: `ROLE-${rolesList.length + 1}`,
      roleName: newRole.roleName,
      description: newRole.description,
      userCount: 0,
      badgeColor: "bg-teal-500/20 text-teal-300 border-teal-500/40",
      permissions: {
        dashboard: true,
        viewInquiries: true,
        editInquiries: false,
        exportInquiries: false,
        manageJobs: false,
        viewCandidates: false,
        manageCandidates: false,
        publishBlogs: false,
        manageUsers: false,
        manageRoles: false,
      },
    };
    setRolesList([...rolesList, roleConfig]);
    setShowAddRoleModal(false);
    setNewRole({ roleName: "", description: "" });
  };

  // Permission Toggle
  const togglePermission = (roleId: string, permKey: keyof RolePermissionConfig["permissions"]) => {
    setRolesList((prev) =>
      prev.map((role) => {
        if (role.id === roleId) {
          // Keep super admin all true
          if (role.roleName === "Super Admin") return role;
          return {
            ...role,
            permissions: {
              ...role.permissions,
              [permKey]: !role.permissions[permKey],
            },
          };
        }
        return role;
      })
    );
  };

  const exportLeadsCSV = () => {
    const headers = "ID,Date,Name,Company,Email,Phone,City,ProjectType,Area,Tonnage,Status\n";
    const rows = filteredLeads
      .map((l) => `"${l.id}","${l.created_at}","${l.name}","${l.company}","${l.email}","${l.phone}","${l.city}","${l.projectType}","${l.areaSqFt}","${l.estTonnage}","${l.status}"`)
      .join("\n");
    const blob = new Blob([headers + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `yatee_inquiries_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 flex flex-col md:flex-row antialiased selection:bg-[#F26522] selection:text-white font-sans">
      {/* ============================================================ */}
      {/* SIDEBAR NAVIGATION */}
      {/* ============================================================ */}
      <aside className="w-full md:w-64 bg-[#080E1E] border-r border-slate-800/90 flex flex-col shrink-0 md:min-h-screen">
        {/* Brand Header */}
        <div className="p-5 border-b border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#1D3A74] to-[#F26522] flex items-center justify-center shadow-lg border border-blue-500/30">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-black text-sm text-white tracking-tight leading-tight">
                YATEE PEB
              </div>
              <div className="text-[10px] text-orange-400 font-extrabold uppercase tracking-widest">
                Super Admin
              </div>
            </div>
          </div>
          <span className="bg-blue-950/70 border border-blue-800/60 text-blue-300 text-[10px] font-mono font-bold px-2 py-0.5 rounded">
            v2.4
          </span>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-3.5 space-y-1.5 overflow-y-auto">
          {/* 1. Dashboard */}
          <button
            onClick={() => setActiveNav("dashboard")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeNav === "dashboard"
                ? "bg-[#1D3A74] text-white shadow-lg shadow-blue-950/50 border border-blue-600/40"
                : "text-slate-400 hover:text-white hover:bg-slate-900/60"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <LayoutDashboard className={`w-4 h-4 ${activeNav === "dashboard" ? "text-orange-400" : "text-slate-400"}`} />
              <span>1. Dashboard</span>
            </div>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </button>

          {/* 2. Enquiery */}
          <button
            onClick={() => setActiveNav("enquiry")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeNav === "enquiry"
                ? "bg-[#1D3A74] text-white shadow-lg shadow-blue-950/50 border border-blue-600/40"
                : "text-slate-400 hover:text-white hover:bg-slate-900/60"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <MessageSquareText className={`w-4 h-4 ${activeNav === "enquiry" ? "text-orange-400" : "text-slate-400"}`} />
              <span>2. Enquiery</span>
            </div>
            <span className="bg-orange-500/20 text-orange-300 border border-orange-500/40 text-[10px] font-mono px-2 py-0.5 rounded-full">
              {leads.length}
            </span>
          </button>

          {/* 3. Career (Accordion) */}
          <div className="space-y-1 pt-1">
            <button
              onClick={() => setCareerMenuOpen(!careerMenuOpen)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeNav.startsWith("career")
                  ? "bg-slate-900/90 text-white border border-slate-800"
                  : "text-slate-400 hover:text-white hover:bg-slate-900/60"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Briefcase className="w-4 h-4 text-blue-400" />
                <span>3. Career</span>
              </div>
              <ChevronDown
                className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                  careerMenuOpen ? "rotate-0" : "-rotate-90"
                }`}
              />
            </button>

            {careerMenuOpen && (
              <div className="pl-6 pr-1 space-y-1 border-l-2 border-slate-800 ml-4 py-1">
                {/* 3.1 New Job Post */}
                <button
                  onClick={() => setActiveNav("career-new")}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                    activeNav === "career-new"
                      ? "bg-[#F26522] text-white shadow-md font-bold"
                      : "text-slate-400 hover:text-white hover:bg-slate-900/40"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <PlusCircle className="w-3.5 h-3.5" />
                    <span>New Job Post</span>
                  </div>
                  <span className="text-[10px] font-mono bg-slate-950/60 px-1.5 py-0.5 rounded">
                    {jobPostings.length}
                  </span>
                </button>

                {/* 3.2 All Candidates */}
                <button
                  onClick={() => setActiveNav("career-candidates")}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                    activeNav === "career-candidates"
                      ? "bg-[#F26522] text-white shadow-md font-bold"
                      : "text-slate-400 hover:text-white hover:bg-slate-900/40"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5" />
                    <span>All Candidates</span>
                  </div>
                  <span className="text-[10px] font-mono bg-slate-950/60 px-1.5 py-0.5 rounded">
                    {candidates.length}
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* 4. Blogs */}
          <button
            onClick={() => setActiveNav("blogs")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeNav === "blogs"
                ? "bg-[#1D3A74] text-white shadow-lg shadow-blue-950/50 border border-blue-600/40"
                : "text-slate-400 hover:text-white hover:bg-slate-900/60"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <BookOpen className={`w-4 h-4 ${activeNav === "blogs" ? "text-orange-400" : "text-slate-400"}`} />
              <span>4. Blogs</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded-full border border-slate-800">
              {blogs.length}
            </span>
          </button>

          {/* 5. Settings (Accordion) */}
          <div className="space-y-1 pt-1">
            <button
              onClick={() => setSettingsMenuOpen(!settingsMenuOpen)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeNav.startsWith("settings")
                  ? "bg-slate-900/90 text-white border border-slate-800"
                  : "text-slate-400 hover:text-white hover:bg-slate-900/60"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Settings className="w-4 h-4 text-orange-400" />
                <span>5. Settings</span>
              </div>
              <ChevronDown
                className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                  settingsMenuOpen ? "rotate-0" : "-rotate-90"
                }`}
              />
            </button>

            {/* Nested Sub-items */}
            {settingsMenuOpen && (
              <div className="pl-6 pr-1 space-y-1 border-l-2 border-slate-800 ml-4 py-1">
                {/* 5.1 Users */}
                <button
                  onClick={() => setActiveNav("settings-users")}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                    activeNav === "settings-users"
                      ? "bg-[#F26522] text-white shadow-md font-bold"
                      : "text-slate-400 hover:text-white hover:bg-slate-900/40"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <UserCog className="w-3.5 h-3.5" />
                    <span>Users</span>
                  </div>
                  <span className="text-[10px] font-mono bg-slate-950/60 px-1.5 py-0.5 rounded">
                    {usersList.length}
                  </span>
                </button>

                {/* 5.2 Roles & Permission */}
                <button
                  onClick={() => setActiveNav("settings-roles")}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                    activeNav === "settings-roles"
                      ? "bg-[#F26522] text-white shadow-md font-bold"
                      : "text-slate-400 hover:text-white hover:bg-slate-900/40"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Key className="w-3.5 h-3.5" />
                    <span>Roles & Permission</span>
                  </div>
                  <span className="text-[10px] font-mono bg-slate-950/60 px-1.5 py-0.5 rounded">
                    {rolesList.length}
                  </span>
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* User Session & Logout Footer */}
        <div className="p-4 border-t border-slate-800/80 bg-slate-950/60">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 font-bold flex items-center justify-center border border-blue-500/30 text-xs">
              {user.email?.charAt(0).toUpperCase() || "A"}
            </div>
            <div className="overflow-hidden">
              <div className="text-white font-bold text-xs truncate">{user.email}</div>
              <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Super Admin
              </div>
            </div>
          </div>

          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="w-full flex items-center justify-center gap-2 bg-red-950/40 hover:bg-red-900/60 text-red-300 border border-red-800/60 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer disabled:opacity-50"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>{isLoggingOut ? "Signing out..." : "Sign Out"}</span>
          </button>
        </div>
      </aside>

      {/* ============================================================ */}
      {/* MAIN CONTENT WORKSPACE */}
      {/* ============================================================ */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header Bar */}
        <header className="bg-[#080E1E]/95 border-b border-slate-800/90 h-16 px-4 sm:px-8 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <h1 className="text-base sm:text-lg font-black text-white tracking-tight capitalize">
              {activeNav === "dashboard" && "Executive Dashboard Overview"}
              {activeNav === "enquiry" && "Customer Enquiries & Quotation RFQs"}
              {activeNav === "career-new" && "Career • Job Postings & Openings"}
              {activeNav === "career-candidates" && "Career • Candidate Applications"}
              {activeNav === "blogs" && "Technical Blogs & News Articles"}
              {activeNav === "settings-users" && "Settings • Admin & Staff Users"}
              {activeNav === "settings-roles" && "Settings • Roles & Permissions Matrix"}
            </h1>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="hidden sm:flex items-center gap-2 text-slate-400 font-mono text-[11px]">
              <Clock className="w-3.5 h-3.5 text-orange-400" />
              <span>IST {currentTime}</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full text-[11px] text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Supabase: ap-northeast-1</span>
            </div>
          </div>
        </header>

        {/* Body Viewport */}
        <main className="flex-1 p-4 sm:p-8 overflow-y-auto space-y-6">
          {/* ========================================================== */}
          {/* VIEW 1: DASHBOARD */}
          {/* ========================================================== */}
          {activeNav === "dashboard" && (
            <div className="space-y-6">
              {/* High-Impact KPI Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="bg-[#0A1020] border border-slate-800/90 rounded-2xl p-5 shadow-xl">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase tracking-wider">
                    <span>Active Enquiries</span>
                    <MessageSquareText className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="text-3xl font-black text-white mt-3">{leads.length}</div>
                  <div className="text-xs text-emerald-400 font-bold mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +18% this month
                  </div>
                </div>

                <div className="bg-[#0A1020] border border-slate-800/90 rounded-2xl p-5 shadow-xl">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase tracking-wider">
                    <span>Pipeline Steel Demand</span>
                    <Layers className="w-4 h-4 text-orange-400" />
                  </div>
                  <div className="text-3xl font-black text-white mt-3">
                    {stats.totalTonnage.toLocaleString()} <span className="text-sm font-normal text-slate-400">MT</span>
                  </div>
                  <div className="text-xs text-orange-300 font-bold mt-1">
                    Est. Value: ₹42.8 Cr
                  </div>
                </div>

                <div className="bg-[#0A1020] border border-slate-800/90 rounded-2xl p-5 shadow-xl">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase tracking-wider">
                    <span>Active Staff / Users</span>
                    <UserCog className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="text-3xl font-black text-white mt-3">{usersList.length}</div>
                  <div className="text-xs text-slate-400 font-semibold mt-1">
                    Across {rolesList.length} Defined Roles
                  </div>
                </div>

                <div className="bg-[#0A1020] border border-slate-800/90 rounded-2xl p-5 shadow-xl">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase tracking-wider">
                    <span>Published Blogs</span>
                    <BookOpen className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-3xl font-black text-white mt-3">{blogs.length}</div>
                  <div className="text-xs text-emerald-400 font-bold mt-1">
                    Technical Whitepapers Live
                  </div>
                </div>
              </div>

              {/* Split Content: Recent Enquiries + Quick Careers Status */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Recent Enquiries (7 cols) */}
                <div className="lg:col-span-7 bg-[#0A1020] border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-black text-white flex items-center gap-2">
                        <MessageSquareText className="w-4 h-4 text-orange-400" />
                        Recent Customer Enquiries
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">Quotations submitted from website</p>
                    </div>
                    <button
                      onClick={() => setActiveNav("enquiry")}
                      className="text-xs text-orange-400 hover:text-orange-300 font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <span>View All</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {leads.slice(0, 4).map((lead) => (
                      <div
                        key={lead.id}
                        onClick={() => {
                          setSelectedLead(lead);
                          setActiveNav("enquiry");
                        }}
                        className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-all cursor-pointer flex items-center justify-between"
                      >
                        <div>
                          <div className="font-bold text-white text-xs">{lead.name} • <span className="text-slate-400">{lead.company}</span></div>
                          <div className="text-[11px] text-slate-400 mt-0.5">{lead.projectType} ({lead.areaSqFt})</div>
                        </div>
                        <span
                          className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase ${
                            lead.status === "NEW"
                              ? "bg-blue-500/20 text-blue-300 border border-blue-500/40"
                              : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                          }`}
                        >
                          {lead.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Candidate Pipeline Summary (5 cols) */}
                <div className="lg:col-span-5 bg-[#0A1020] border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-black text-white flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-400" />
                        Candidate Applications
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">Recent engineering applicants</p>
                    </div>
                    <button
                      onClick={() => setActiveNav("career-candidates")}
                      className="text-xs text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <span>View All</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {candidates.slice(0, 3).map((can) => (
                      <div
                        key={can.id}
                        className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <div className="font-bold text-white text-xs">{can.name}</div>
                          <span className="text-[10px] font-mono text-orange-300 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">
                            {can.status.replace("_", " ")}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-400 truncate">{can.position}</div>
                        <div className="text-[10px] text-slate-500 font-mono">{can.experience} exp • {can.currentCompany}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* VIEW 2: ENQUIERY */}
          {/* ========================================================== */}
          {activeNav === "enquiry" && (
            <div className="space-y-4">
              {/* Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0A1020] border border-slate-800 p-4 rounded-2xl">
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search client, company, city, ID..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <div className="flex items-center gap-2">
                    <Filter className="w-3.5 h-3.5 text-slate-400" />
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
                    >
                      <option value="ALL">All Statuses</option>
                      <option value="NEW">New Enquiries</option>
                      <option value="REVIEWING">Engineering Review</option>
                      <option value="PROPOSAL_SENT">Proposal Sent</option>
                      <option value="CONVERTED">Approved / Converted</option>
                    </select>
                  </div>

                  <button
                    onClick={exportLeadsCSV}
                    className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Export CSV</span>
                  </button>
                </div>
              </div>

              {/* Table */}
              <div className="bg-[#0A1020] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400 font-bold uppercase tracking-wider">
                      <tr>
                        <th className="py-4 px-4">Ref / Client</th>
                        <th className="py-4 px-4">Contact</th>
                        <th className="py-4 px-4">Project Type</th>
                        <th className="py-4 px-4">Area & Steel</th>
                        <th className="py-4 px-4">Status</th>
                        <th className="py-4 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                      {filteredLeads.map((lead) => (
                        <tr
                          key={lead.id}
                          onClick={() => setSelectedLead(lead)}
                          className="hover:bg-slate-900/60 transition-colors cursor-pointer"
                        >
                          <td className="py-4 px-4">
                            <div className="font-mono text-[10px] text-slate-500">{lead.id} • {lead.created_at}</div>
                            <div className="font-bold text-white text-sm mt-0.5">{lead.name}</div>
                            <div className="text-slate-400 text-xs">{lead.company} ({lead.city})</div>
                          </td>

                          <td className="py-4 px-4">
                            <div className="flex items-center gap-1.5 text-slate-300">
                              <Mail className="w-3 h-3 text-slate-500" />
                              <span>{lead.email}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-slate-400 mt-1">
                              <Phone className="w-3 h-3 text-slate-500" />
                              <span>{lead.phone}</span>
                            </div>
                          </td>

                          <td className="py-4 px-4 font-medium text-slate-200">
                            {lead.projectType}
                          </td>

                          <td className="py-4 px-4">
                            <div className="font-mono font-bold text-orange-300">{lead.areaSqFt}</div>
                            <div className="text-[11px] text-slate-400 font-mono">Est: {lead.estTonnage} MT</div>
                          </td>

                          <td className="py-4 px-4">
                            <span
                              className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase ${
                                lead.status === "NEW"
                                  ? "bg-blue-500/20 text-blue-300 border border-blue-500/40"
                                  : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                              }`}
                            >
                              {lead.status.replace("_", " ")}
                            </span>
                          </td>

                          <td className="py-4 px-4 text-right">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedLead(lead);
                              }}
                              className="text-xs text-blue-400 hover:text-blue-300 font-bold underline cursor-pointer"
                            >
                              Inspect
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* VIEW 3.1: CAREER -> NEW JOB POST */}
          {/* ========================================================== */}
          {activeNav === "career-new" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between bg-[#0A1020] border border-slate-800 p-5 rounded-2xl">
                <div>
                  <h2 className="text-base font-black text-white flex items-center gap-2">
                    <PlusCircle className="w-5 h-5 text-orange-400" />
                    Publish New Engineering / Plant Job Opening
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Live vacancies displayed on the public careers page
                  </p>
                </div>
                <button
                  onClick={() => setShowNewJobModal(true)}
                  className="bg-[#F26522] hover:bg-[#d95316] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create Job Post</span>
                </button>
              </div>

              {/* Current Job Postings Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {jobPostings.map((job) => (
                  <div
                    key={job.slug}
                    className="bg-[#0A1020] border border-slate-800 rounded-2xl p-5 space-y-3 hover:border-slate-700 transition-all"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">
                          {job.department}
                        </span>
                        <h3 className="font-bold text-white text-sm mt-1.5">{job.title}</h3>
                        <p className="text-xs text-slate-400 mt-0.5">{job.location} • {job.experienceRequired}</p>
                      </div>
                      <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {job.openingsCount} Openings
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {job.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                      {job.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* VIEW 3.2: CAREER -> ALL CANDIDATES */}
          {/* ========================================================== */}
          {activeNav === "career-candidates" && (
            <div className="space-y-4">
              <div className="bg-[#0A1020] border border-slate-800 p-5 rounded-2xl flex items-center justify-between">
                <div>
                  <h2 className="text-base font-black text-white flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-400" />
                    All Candidate Job Applications ({candidates.length})
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Manage applicant resumes, qualifications, screening stages, and interview schedules
                  </p>
                </div>
              </div>

              <div className="bg-[#0A1020] border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400 font-bold uppercase tracking-wider">
                      <tr>
                        <th className="py-4 px-4">Applicant / Position</th>
                        <th className="py-4 px-4">Contact</th>
                        <th className="py-4 px-4">Experience & Company</th>
                        <th className="py-4 px-4">Qualification</th>
                        <th className="py-4 px-4">Hiring Status</th>
                        <th className="py-4 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                      {candidates.map((can) => (
                        <tr key={can.id} className="hover:bg-slate-900/60 transition-colors">
                          <td className="py-4 px-4">
                            <div className="font-bold text-white text-sm">{can.name}</div>
                            <div className="text-xs text-orange-300 font-medium mt-0.5">{can.position}</div>
                            <div className="text-[10px] text-slate-500 font-mono mt-0.5">{can.id} • {can.appliedDate}</div>
                          </td>

                          <td className="py-4 px-4">
                            <div className="flex items-center gap-1.5 text-slate-300">
                              <Mail className="w-3 h-3 text-slate-500" />
                              <span>{can.email}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-slate-400 mt-1">
                              <Phone className="w-3 h-3 text-slate-500" />
                              <span>{can.phone}</span>
                            </div>
                          </td>

                          <td className="py-4 px-4">
                            <div className="font-bold text-white">{can.experience}</div>
                            <div className="text-[11px] text-slate-400">{can.currentCompany}</div>
                          </td>

                          <td className="py-4 px-4 text-slate-300">
                            {can.qualification}
                          </td>

                          <td className="py-4 px-4">
                            <span
                              className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase ${
                                can.status === "SHORTLISTED"
                                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                                  : can.status === "INTERVIEW_SCHEDULED"
                                  ? "bg-blue-500/20 text-blue-300 border border-blue-500/40"
                                  : "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                              }`}
                            >
                              {can.status.replace("_", " ")}
                            </span>
                          </td>

                          <td className="py-4 px-4 text-right">
                            <select
                              value={can.status}
                              onChange={(e) => {
                                const newSt = e.target.value as Candidate["status"];
                                setCandidates((prev) =>
                                  prev.map((c) => (c.id === can.id ? { ...c, status: newSt } : c))
                                );
                              }}
                              className="bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1 text-[11px] text-slate-200 focus:outline-none focus:border-blue-500"
                            >
                              <option value="NEW">New</option>
                              <option value="SCREENING">Screening</option>
                              <option value="INTERVIEW_SCHEDULED">Interview</option>
                              <option value="SHORTLISTED">Shortlisted</option>
                              <option value="REJECTED">Rejected</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* VIEW 4: BLOGS */}
          {/* ========================================================== */}
          {activeNav === "blogs" && (
            <div className="space-y-6">
              <div className="bg-[#0A1020] border border-slate-800 p-5 rounded-2xl flex items-center justify-between">
                <div>
                  <h2 className="text-base font-black text-white flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-400" />
                    Engineering Blogs & Technical Whitepapers ({blogs.length})
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Articles published on the public /news and insights pages
                  </p>
                </div>
                <button
                  onClick={() => setShowNewBlogModal(true)}
                  className="bg-[#F26522] hover:bg-[#d95316] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <Plus className="w-4 h-4" />
                  <span>Publish New Blog</span>
                </button>
              </div>

              {/* Blogs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {blogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="bg-[#0A1020] border border-slate-800 rounded-2xl p-5 space-y-3 hover:border-slate-700 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-slate-500 font-bold">{blog.id}</span>
                        <span className="text-[10px] font-bold text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                          {blog.category}
                        </span>
                      </div>
                      <h3 className="font-bold text-white text-sm leading-snug">{blog.title}</h3>
                      <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">{blog.summary}</p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                      <span>By {blog.author}</span>
                      <span>{blog.publishDate} • {blog.readTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* VIEW 5.1: SETTINGS -> USERS */}
          {/* ========================================================== */}
          {activeNav === "settings-users" && (
            <div className="space-y-6">
              {/* Users Header Bar */}
              <div className="bg-[#0A1020] border border-slate-800 p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-base font-black text-white flex items-center gap-2">
                      <UserCog className="w-5 h-5 text-orange-400" />
                      Live Database Users ({usersList.length})
                    </h2>
                    <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Supabase auth.users
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Authenticated team members and administrators loaded directly from the production Supabase database
                  </p>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <button
                    onClick={() => fetchUsers()}
                    disabled={isLoadingUsers}
                    className="bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700/70 px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors disabled:opacity-50"
                    title="Reload users from Supabase"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isLoadingUsers ? "animate-spin text-orange-400" : ""}`} />
                    <span>{isLoadingUsers ? "Fetching..." : "Refresh"}</span>
                  </button>
                  <button
                    onClick={() => setShowAddUserModal(true)}
                    className="bg-[#F26522] hover:bg-[#d95316] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>Add New User</span>
                  </button>
                </div>
              </div>

              {/* Temporary Password / Credentials Notice */}
              {createdUserCreds && (
                <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-lg animate-in fade-in">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-emerald-300">
                        New Database User Provisioned Successfully!
                      </div>
                      <div className="text-slate-300 mt-0.5">
                        User <span className="font-mono text-emerald-400 font-bold">{createdUserCreds.email}</span> was created in Supabase Auth.
                        {createdUserCreds.tempPassword && (
                          <span className="ml-1">
                            Temporary Password: <code className="bg-slate-900 px-2 py-0.5 rounded text-amber-300 font-mono font-bold border border-slate-700">{createdUserCreds.tempPassword}</code>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {createdUserCreds.tempPassword && (
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(
                            `Email: ${createdUserCreds.email}\nTemporary Password: ${createdUserCreds.tempPassword}\nLogin Portal: ${window.location.origin}/superadmin_2026`
                          );
                          setCopiedPassword(true);
                          setTimeout(() => setCopiedPassword(false), 2500);
                        }}
                        className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 cursor-pointer border border-slate-700"
                      >
                        {copiedPassword ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Credentials</span>
                          </>
                        )}
                      </button>
                    )}
                    <button
                      onClick={() => setCreatedUserCreds(null)}
                      className="text-slate-400 hover:text-white px-2 py-1 cursor-pointer font-bold"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              )}

              {/* Error Notice */}
              {usersError && (
                <div className="bg-red-950/40 border border-red-800/60 rounded-2xl p-4 flex items-center justify-between text-xs text-red-300">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                    <span><strong>Database Error:</strong> {usersError}</span>
                  </div>
                  <button
                    onClick={() => fetchUsers()}
                    className="underline font-bold text-white hover:text-red-200 cursor-pointer"
                  >
                    Try Again
                  </button>
                </div>
              )}

              {/* Users Table */}
              <div className="bg-[#0A1020] border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                {isLoadingUsers && usersList.length === 0 ? (
                  <div className="p-12 text-center text-slate-400 flex flex-col items-center justify-center gap-3">
                    <RefreshCw className="w-6 h-6 animate-spin text-orange-400" />
                    <p className="text-sm font-semibold">Connecting to Supabase Auth & loading database users...</p>
                  </div>
                ) : usersList.length === 0 ? (
                  <div className="p-12 text-center text-slate-400">
                    <p className="text-sm font-medium">No users found in database.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400 font-bold uppercase tracking-wider">
                        <tr>
                          <th className="py-4 px-4">User / Name</th>
                          <th className="py-4 px-4">Email Address</th>
                          <th className="py-4 px-4">Assigned Role</th>
                          <th className="py-4 px-4">Department</th>
                          <th className="py-4 px-4">Status</th>
                          <th className="py-4 px-4">Last Activity</th>
                          <th className="py-4 px-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 text-slate-300">
                        {usersList.map((u) => {
                          const isCurrentUser = u.email?.toLowerCase() === user.email?.toLowerCase();
                          return (
                            <tr key={u.id} className="hover:bg-slate-900/60 transition-colors">
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-2.5">
                                  <div className="w-7 h-7 rounded-full bg-blue-600/20 text-blue-400 font-bold flex items-center justify-center border border-blue-500/30 text-xs">
                                    {u.name.charAt(0).toUpperCase()}
                                  </div>
                                  <div>
                                    <div className="font-bold text-white text-sm flex items-center gap-2">
                                      {u.name}
                                      {isCurrentUser && (
                                        <span className="text-[9px] bg-orange-500/20 text-orange-400 border border-orange-500/30 px-1.5 py-0.2 rounded-md font-bold">
                                          YOU
                                        </span>
                                      )}
                                    </div>
                                    <div className="text-[10px] text-slate-500 font-mono" title={u.id}>
                                      {u.id.length > 18 ? `${u.id.slice(0, 8)}...${u.id.slice(-6)}` : u.id}
                                    </div>
                                  </div>
                                </div>
                              </td>

                              <td className="py-4 px-4 font-mono text-slate-300">
                                {u.email}
                              </td>

                              <td className="py-4 px-4">
                                <span
                                  className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider ${
                                    u.role === "Super Admin"
                                      ? "bg-red-500/20 text-red-300 border border-red-500/40"
                                      : u.role === "Lead Design Engineer"
                                      ? "bg-blue-500/20 text-blue-300 border border-blue-500/40"
                                      : u.role === "HR / Recruitment Lead"
                                      ? "bg-purple-500/20 text-purple-300 border border-purple-500/40"
                                      : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                                  }`}
                                >
                                  {u.role}
                                </span>
                              </td>

                              <td className="py-4 px-4 text-slate-400 font-medium">
                                {u.department}
                              </td>

                              <td className="py-4 px-4">
                                <span className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
                                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                  {u.status}
                                </span>
                              </td>

                              <td className="py-4 px-4 font-mono text-slate-400 text-[11px]">
                                {u.lastActive}
                              </td>

                              <td className="py-4 px-4 text-right">
                                {isCurrentUser ? (
                                  <span className="text-[11px] text-slate-500 font-medium italic">
                                    Protected (Current)
                                  </span>
                                ) : (
                                  <button
                                    onClick={() => handleDeleteUser(u)}
                                    className="text-xs text-red-400 hover:text-red-300 font-bold cursor-pointer hover:underline"
                                  >
                                    Remove
                                  </button>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* VIEW 5.2: SETTINGS -> ROLES & PERMISSION */}
          {/* ========================================================== */}
          {activeNav === "settings-roles" && (
            <div className="space-y-6">
              {/* Roles Header Bar */}
              <div className="bg-[#0A1020] border border-slate-800 p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
                <div>
                  <h2 className="text-base font-black text-white flex items-center gap-2">
                    <Key className="w-5 h-5 text-orange-400" />
                    Role-Based Access Control (RBAC) & Permission Matrix
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Define granular operational access, module permissions, and functional limits across portal features
                  </p>
                </div>
                <button
                  onClick={() => setShowAddRoleModal(true)}
                  className="bg-[#F26522] hover:bg-[#d95316] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg self-start sm:self-auto"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create Custom Role</span>
                </button>
              </div>

              {/* Roles Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {rolesList.map((role) => {
                  const dynamicCount = usersList.filter(
                    (u) => u.role.toLowerCase() === role.roleName.toLowerCase()
                  ).length;
                  return (
                    <div
                      key={role.id}
                      className="bg-[#0A1020] border border-slate-800 rounded-2xl p-5 space-y-3 hover:border-slate-700 transition-all flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase border ${role.badgeColor}`}>
                            {role.roleName}
                          </span>
                          <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                            {dynamicCount} {dynamicCount === 1 ? "User" : "Users"}
                          </span>
                        </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {role.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
                      <span>{role.id}</span>
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" /> Enforced
                      </span>
                    </div>
                  </div>
                  );
                })}
              </div>

              {/* Interactive Permission Matrix Table */}
              <div className="bg-[#0A1020] border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
                  <h3 className="font-bold text-white text-xs uppercase tracking-wider flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4 text-orange-400" />
                    Granular Module Permission Matrix
                  </h3>
                  <span className="text-[11px] text-slate-400">Click checkboxes to modify permissions</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-950/90 border-b border-slate-800 text-slate-400 font-bold uppercase tracking-wider">
                      <tr>
                        <th className="py-3.5 px-4 min-w-[200px]">Permission / Feature</th>
                        {rolesList.map((r) => (
                          <th key={r.id} className="py-3.5 px-4 text-center min-w-[140px]">
                            {r.roleName}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                      {[
                        { key: "dashboard", label: "Executive Dashboard", desc: "View high-level overview metrics & tickers" },
                        { key: "viewInquiries", label: "View Enquiries", desc: "Browse customer quotation RFQs & details" },
                        { key: "editInquiries", label: "Update Enquiries", desc: "Change inquiry status (Reviewing, Proposal, Converted)" },
                        { key: "exportInquiries", label: "Export Client Data", desc: "Download full inquiries list as CSV" },
                        { key: "manageJobs", label: "Manage Careers / Jobs", desc: "Create, edit, and publish job openings" },
                        { key: "viewCandidates", label: "View Candidates", desc: "Access applicant resumes and qualifications" },
                        { key: "manageCandidates", label: "Screen Candidates", desc: "Advance candidates, schedule interviews, reject" },
                        { key: "publishBlogs", label: "Publish Blogs & News", desc: "Create and publish engineering whitepapers" },
                        { key: "manageUsers", label: "Manage Staff Users", desc: "Add, edit, or remove portal user accounts" },
                        { key: "manageRoles", label: "Configure RBAC Roles", desc: "Modify system role permissions & security rules" },
                      ].map((item) => (
                        <tr key={item.key} className="hover:bg-slate-900/40 transition-colors">
                          <td className="py-3.5 px-4">
                            <div className="font-bold text-white">{item.label}</div>
                            <div className="text-[11px] text-slate-400">{item.desc}</div>
                          </td>

                          {rolesList.map((r) => {
                            const isAllowed = r.permissions[item.key as keyof RolePermissionConfig["permissions"]];
                            const isSuper = r.roleName === "Super Admin";
                            return (
                              <td key={r.id} className="py-3.5 px-4 text-center">
                                <button
                                  type="button"
                                  disabled={isSuper}
                                  onClick={() => togglePermission(r.id, item.key as keyof RolePermissionConfig["permissions"])}
                                  className={`w-6 h-6 rounded-lg inline-flex items-center justify-center transition-all ${
                                    isAllowed
                                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                                      : "bg-slate-900 text-slate-600 border border-slate-800"
                                  } ${isSuper ? "cursor-not-allowed opacity-90" : "cursor-pointer hover:scale-110"}`}
                                >
                                  {isAllowed ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <X className="w-3.5 h-3.5" />}
                                </button>
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ============================================================ */}
      {/* MODAL: INQUIRY INSPECT */}
      {/* ============================================================ */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#0A1124] border border-slate-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl space-y-5 animate-in fade-in zoom-in-95">
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-wider">
                  {selectedLead.id} • {selectedLead.created_at}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">{selectedLead.name}</h3>
                <p className="text-xs text-slate-300">{selectedLead.company}</p>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="text-slate-400 hover:text-white p-1 font-bold text-lg cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs bg-slate-950/80 p-5 rounded-2xl border border-slate-800">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-slate-500 text-[10px] uppercase font-bold">Email</span>
                  <p className="text-white font-medium mt-0.5">{selectedLead.email}</p>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px] uppercase font-bold">Phone Hotline</span>
                  <p className="text-white font-medium mt-0.5">{selectedLead.phone}</p>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px] uppercase font-bold">Location</span>
                  <p className="text-white font-medium mt-0.5">{selectedLead.city}</p>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px] uppercase font-bold">Estimated Area</span>
                  <p className="text-orange-300 font-bold mt-0.5">{selectedLead.areaSqFt}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <span className="text-slate-500 text-[10px] uppercase font-bold">Project Scope / Requirements</span>
                <p className="text-slate-200 mt-1 leading-relaxed bg-slate-900/50 p-3 rounded-xl border border-slate-800/60">
                  {selectedLead.message}
                </p>
              </div>
            </div>

            {/* Pipeline Status Selector */}
            <div>
              <label className="block text-[11px] font-bold text-slate-400 mb-2">Update Pipeline Status</label>
              <div className="grid grid-cols-4 gap-2">
                {(["NEW", "REVIEWING", "PROPOSAL_SENT", "CONVERTED"] as const).map((st) => (
                  <button
                    key={st}
                    onClick={() => handleUpdateLeadStatus(selectedLead.id, st)}
                    className={`py-1.5 px-1 rounded-lg text-[10px] font-bold border transition-all cursor-pointer ${
                      selectedLead.status === st
                        ? "bg-[#1D3A74] border-blue-500 text-white"
                        : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    {st.replace("_", " ")}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <a
                href={`https://wa.me/${selectedLead.phone.replace(/\D/g, "")}?text=Hello%20${encodeURIComponent(selectedLead.name)},%20this%20is%20Yatee%20Steel%20Structures%20regarding%20your%20inquiry.`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] hover:bg-[#20b857] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md"
              >
                <span>WhatsApp Client</span>
              </a>

              <button
                onClick={() => setSelectedLead(null)}
                className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* MODAL: CREATE JOB POST */}
      {/* ============================================================ */}
      {showNewJobModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#0A1124] border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-5 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-orange-400" />
                Add New Job Opening
              </h3>
              <button onClick={() => setShowNewJobModal(false)} className="text-slate-400 hover:text-white font-bold">✕</button>
            </div>

            <form onSubmit={handleCreateJob} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-400 mb-1">Job Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Senior Tekla Structural Detailer"
                  value={newJob.title}
                  onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-400 mb-1">Department</label>
                  <select
                    value={newJob.department}
                    onChange={(e) => setNewJob({ ...newJob, department: e.target.value as JobOpening["department"] })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Design & Structural Engineering">Design & Structural Engineering</option>
                    <option value="Fabrication & Quality">Fabrication & Quality</option>
                    <option value="Site Erection & Safety">Site Erection & Safety</option>
                    <option value="Project Management">Project Management</option>
                    <option value="B2B Sales & Estimation">B2B Sales & Estimation</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-400 mb-1">Location</label>
                  <input
                    type="text"
                    value={newJob.location}
                    onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-400 mb-1">Experience</label>
                  <input
                    type="text"
                    value={newJob.experienceRequired}
                    onChange={(e) => setNewJob({ ...newJob, experienceRequired: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-400 mb-1">Openings Count</label>
                  <input
                    type="number"
                    value={newJob.openingsCount}
                    onChange={(e) => setNewJob({ ...newJob, openingsCount: Number(e.target.value) })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-400 mb-1">Key Skills (comma separated)</label>
                <input
                  type="text"
                  placeholder="Tekla Structures, STAAD.Pro, IS 800"
                  value={newJob.skills}
                  onChange={(e) => setNewJob({ ...newJob, skills: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-400 mb-1">Job Summary</label>
                <textarea
                  rows={3}
                  placeholder="Summary of responsibilities and scope..."
                  value={newJob.summary}
                  onChange={(e) => setNewJob({ ...newJob, summary: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowNewJobModal(false)}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-4 py-2 rounded-xl font-bold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#F26522] hover:bg-[#d95316] text-white px-5 py-2 rounded-xl font-bold shadow-lg cursor-pointer"
                >
                  Publish Job
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* MODAL: CREATE BLOG POST */}
      {/* ============================================================ */}
      {showNewBlogModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#0A1124] border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-5 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-400" />
                Publish Engineering Blog / Whitepaper
              </h3>
              <button onClick={() => setShowNewBlogModal(false)} className="text-slate-400 hover:text-white font-bold">✕</button>
            </div>

            <form onSubmit={handleCreateBlog} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-400 mb-1">Article Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Modern Standing Seam Roofing Innovations"
                  value={newBlog.title}
                  onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-400 mb-1">Category</label>
                  <input
                    type="text"
                    value={newBlog.category}
                    onChange={(e) => setNewBlog({ ...newBlog, category: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-400 mb-1">Read Time</label>
                  <input
                    type="text"
                    value={newBlog.readTime}
                    onChange={(e) => setNewBlog({ ...newBlog, readTime: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-400 mb-1">Author Name</label>
                <input
                  type="text"
                  value={newBlog.author}
                  onChange={(e) => setNewBlog({ ...newBlog, author: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-400 mb-1">Summary / Introduction</label>
                <textarea
                  rows={4}
                  required
                  placeholder="A brief technical overview of the article..."
                  value={newBlog.summary}
                  onChange={(e) => setNewBlog({ ...newBlog, summary: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowNewBlogModal(false)}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-4 py-2 rounded-xl font-bold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#F26522] hover:bg-[#d95316] text-white px-5 py-2 rounded-xl font-bold shadow-lg cursor-pointer"
                >
                  Publish Article
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* MODAL: ADD NEW USER */}
      {/* ============================================================ */}
      {showAddUserModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#0A1124] border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-5 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <UserPlus className="w-5 h-5 text-orange-400" />
                Add Staff / Administrator Account
              </h3>
              <button onClick={() => setShowAddUserModal(false)} className="text-slate-400 hover:text-white font-bold cursor-pointer">✕</button>
            </div>

            <form onSubmit={handleAddUser} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-400 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Er. Hardik Patel"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-400 mb-1">Work Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="name@yateesteel.com"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block font-bold text-slate-400">Initial Password (Optional)</label>
                  <span className="text-[10px] text-slate-500">Auto-generated if left blank</span>
                </div>
                <input
                  type="password"
                  placeholder="Leave blank for secure auto-generated password"
                  value={newUser.password || ""}
                  onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-400 mb-1">Role Assignment</label>
                  <select
                    value={newUser.role}
                    onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Lead Design Engineer">Lead Design Engineer</option>
                    <option value="HR / Recruitment Lead">HR / Recruitment Lead</option>
                    <option value="Technical Content Editor">Technical Content Editor</option>
                    <option value="Plant Operations Lead">Plant Operations Lead</option>
                    <option value="Super Admin">Super Admin</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-400 mb-1">Department</label>
                  <select
                    value={newUser.department}
                    onChange={(e) => setNewUser({ ...newUser, department: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Design & Engineering">Design & Engineering</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="Technical Media">Technical Media</option>
                    <option value="Plant Operations">Plant Operations</option>
                    <option value="Executive">Executive</option>
                  </select>
                </div>
              </div>

              <div className="p-3 bg-blue-950/40 rounded-xl border border-blue-800/40 text-[11px] text-blue-300 flex items-start gap-2">
                <Shield className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  The user will be created in Supabase Auth and provisioned with immediate portal access.
                </span>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddUserModal(false)}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-4 py-2 rounded-xl font-bold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isCreatingUser}
                  className="bg-[#F26522] hover:bg-[#d95316] text-white px-5 py-2 rounded-xl font-bold shadow-lg cursor-pointer flex items-center gap-2 disabled:opacity-50"
                >
                  {isCreatingUser ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Provisioning...</span>
                    </>
                  ) : (
                    <span>Save to Database</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* MODAL: ADD CUSTOM ROLE */}
      {/* ============================================================ */}
      {showAddRoleModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#0A1124] border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-5 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Key className="w-5 h-5 text-orange-400" />
                Create Custom RBAC Role
              </h3>
              <button onClick={() => setShowAddRoleModal(false)} className="text-slate-400 hover:text-white font-bold cursor-pointer">✕</button>
            </div>

            <form onSubmit={handleAddRole} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-400 mb-1">Role Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Structural Estimation Auditor"
                  value={newRole.roleName}
                  onChange={(e) => setNewRole({ ...newRole, roleName: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-400 mb-1">Role Description *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe duties, access scope, and constraints..."
                  value={newRole.description}
                  onChange={(e) => setNewRole({ ...newRole, description: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-slate-400">
                After creating this role, you can immediately toggle its specific module permissions directly in the permission matrix table.
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddRoleModal(false)}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-4 py-2 rounded-xl font-bold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#F26522] hover:bg-[#d95316] text-white px-5 py-2 rounded-xl font-bold shadow-lg cursor-pointer"
                >
                  Create Role
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
