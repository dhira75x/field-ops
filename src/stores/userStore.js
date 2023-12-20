import { defineStore } from "pinia";
import router from "../router/index";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    token: null,
    user: null,
    isAuthenticated: false,
    allowedRoles: [
      "CUSTOMER SUPPORT",
      "CUSTOMER SUPPORT SUPERVISOR",
      "Customer Management",
      "MANAGEMENT",
      "BPU",
      "GM Marketing",
      "Market Research & Strategy Analyst",
      "Communication & Brand Management Officer",
      "Marketing & Implementation Officer",
      "Touchpoint Management Officer",
      "Touchpoint complaince Officer",
      "GM CRM",
      "CRM Manager",
      "Key Account Executive/DIP- Medium Enterprise",
      "Dedicated Key Account Executive/DIP- Large Enterprise(Business solutions)",
      "Key Account Executive - MDAs, IDAs, & Embassies",
      "Sales Manager",
      "Channel Salaes Officer",
      "Direct Sales Officer",
      "Financial Accountant",
      "Treasury and investment Manager",
      "Management Accountant",
      "Revenue Manager",
      "GM Technology",
      "Development Manager",
      "Frontend Developer",
      "Backend Developer",
      "Professtional Services Engineer",
      "Testing",
      "Mobile Developer",
      "Software Architecture Designer",
      "UI/UX Designer",
      "CEO",
      "COO",
      "Head",
      "HR",
      "Compliance Officer",
      "Performance Officer",
      "Data Analyst",
      "Project Management Officer",
      "QC(Quality Control)",
      "Technicians",
      "General Operations Manager",
      "CX Head",
      "CX Supervisor",
      "Customer Support Supervisor",
      "Customer Support Officers",
      "Customer Service Officers",
      "Lounge Support Officers",
      "Head of Planning",
      "Planning Officer",
      "Data Gathering Officer",
      "GM Finance",
      "Senior Manager, Finance",
      "Revenue Management Officer",
      "Management Accountant",
      "CMO",
      "Head, Digital Products and Services",
      "Product Manager- Legend Pay",
      "Product Manager- Legend WiFi",
      "Head, Channels Management",
      "Physical Sales",
      "Channel Sales",
      "Sales Officer",
      "Touchpoint Compliance Officer",
      "Digital Marketing",
      "UI/UX Designer",
      "CFO",
      "Expenditure Management Accountant",
      "CIO",
      "Strategy Officer",
      "GOC Manager",
      "DM Customer Support Center",
      "Cloud Support",
      "Billing Support",
      "Network Infrastructure Support",
      "DM Business Performance",
      "Supply Chain Manager",
      "Vendor Management Officer (System)",
      "Inventory Management Officer (System)",
      "Corporate Service Manager",
      "Administration Officer",
      "Facility Management Officer (System)",
      "Logistics & Fleet Management Officer (System)",
      "General Counsel/Head of Legal",
      "Deputy Head of Legal",
      "Commercial/Corporate Governace Specialist",
      "Government Affairs Regulatory Compliance Officer",
      "Legal Administrative Officer",
      "Human Resource Manager",
      "Human Resource Officer",
      "Employee Relations Officer",
      "Learning, Development and Career Officer",
      "CTO",
      "GM Core Network",
      "DM Core Network",
      "AM IP/CDN",
      "Network Provisioning, Capacity and Security engineer",
      "IP Voice Engineer",
      "Transmission Engineer",
      "WAAS Engineer",
      "AM Active Network Monitoring",
      "Network Reporting and Monitoring Engineer",
      "Fault Management Unit Engineer",
      "Data Center Engineer",
      "GM Network Operations",
      "DM Network Operations",
      "AM Network Operations Center",
      "Network Analyst",
      "Network Monitoring Engineer",
      "AM Metro Passive Network Maintenance",
      "BB Transmission Network Engineer",
      "BB Transmission Technician",
      "Transmission Network Diagnosis Supervisor",
      "BB Transmission Diagnosis Technician",
      "Project Manager",
      "Installer Supervisor",
      "Installer",
      "Provisioning Supervisor",
      "Provisioning Technician",
      "AM Network Planning and Implementation",
      "AM Network Data management Center",
      "Network Data Analyst",
      "Network Data Gathering Management",
      "Network Support officer",
      "GM Cloud Network",
      "Senior Manager Cloud Network",
      "AM Cloud Service Delivery",
      "Physical Service Delivery",
      "Managed Services Engineer",
      "Support Engineer",
      "Cloud Service Delivery (Portal) Engineer",
      "Cloud Project Management Officer",
      "Virtual Infrastructure",
      "Architecture Design Engineer",
      "Partnership and Alliance Officer",
      'Key Account Executive/DIP- Medium Enterprise',
      "Analyst"
    ],
    isAdmin: false,
    customerToken:
      "eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJ3ZWIiOiJodHRwczovL2RpcC5zdWJ1cmJhbmZpYmVyY28uY29tIiwicGxhdGZvcm0iOiJEaWdpdGFsIEluZnJhc3RydWN0dXJlIFBsYXRmb3JtIiwidHlwZSI6IkpXVCJ9.-mSjyOB2Fv7E6cIE_bvPepy7eZVFhb-ge7xofttgsKZDuBPi6uxq9GW5Xtt1GJUZ",
    installationToken:
      "K7cF07jVHIInZ3sAturndQSjU2ltnB2dgcGKXmXgdIpjn2eDGDAQijrkW6hz",
    leadToken:null,
    leadRefreshToken:null
  }),

  //   getters: {
  //     isAuthenticated: (state) => state.isAuthenticated,
  //     user: (state) => state.user,
  //     token: (state) => state.token,
  //   },

  actions: {
    updateIsAuthenicated(status) {
      this.isAuthenticated = status;
    },
    hasRole(role) {
      return this.allowedRoles.some((r) => {
        return r.toLowerCase() == role.toLowerCase();
      });
    },

    logout() {
      this.isAuthenticated = false;
      this.isAdmin = false;
      this.token = null;
      this.user = null;
      localStorage.removeItem("userStore");
      router.push({ name: "login" });
    },
    checkRole() {
      if (
        this.user &&
        this.user?.role.toUpperCase() === "CUSTOMER SUPPORT SUPERVISOR"
      ) {
        this.isAdmin = true;
      }
    },
    isOfficer() {
      return this.user?.position?.toLowerCase() != "officer";
    },
    userHasRole(role) {
      return this.user?.role?.toLowerCase() === role.toLowerCase();
    },
  },
  persist: {
    storage: localStorage,
    paths: ["isAuthenticated", "user", "token", "isAdmin", "leadToken", "leadRefreshToken"],
  },
});
