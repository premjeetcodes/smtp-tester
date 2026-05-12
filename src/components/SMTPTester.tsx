import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Server,
  User,
  ShieldCheck,
  Send,
  CheckCircle2,
  AlertCircle,
  Zap,
} from "lucide-react";

import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function SMTPTester() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    host: "",
    port: "587",
    username: "",
    password: "",
    encryption: "tls",
    fromEmail: "",
    fromName: "",
    testEmail: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendTestEmail = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/send-test-email",
        form
      );

      toast.success(response.data.message);
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ||
          "SMTP Connection Failed"
      );
    }

    setLoading(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <Toaster position="top-right" />

      <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950 text-white">
        {/* Premium Animated Background Glows */}
        <div className="absolute -top-60 -left-60 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-blue-600/40 to-cyan-500/40 blur-3xl animate-pulse" />
        <div className="absolute -bottom-60 -right-60 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-purple-600/40 to-pink-500/40 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

        {/* Navbar */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-40 border-b border-white/10 bg-gradient-to-r from-slate-900/60 via-purple-900/40 to-slate-900/60 backdrop-blur-lg"
        >
          <div className="mx-auto max-w-full px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="rounded-lg bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-500 p-2.5 shadow-lg shadow-cyan-500/50"
              >
                <Mail size={24} className="text-white" />
              </motion.div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                  SMTP Tester
                </h1>
                <p className="text-xs text-gray-400">Professional Email Testing</p>
              </div>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-cyan-400"
            >
              <Zap size={20} />
            </motion.div>
          </div>
        </motion.nav>

        {/* Main Content */}
        <div className="relative z-10 w-full py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-200 via-cyan-200 to-purple-300 bg-clip-text text-transparent">
                Test Your SMTP Configuration
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                Verify your email server credentials with instant feedback. Secure, fast, and reliable testing.
              </p>
            </motion.div>

            {/* Main Card Grid */}
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                {/* Info Cards */}
                <motion.div
                  variants={itemVariants}
                  className="lg:col-span-1 space-y-4 order-2 lg:order-1"
                >
                  <InfoCard
                    icon={<ShieldCheck className="text-blue-400" size={24} />}
                    title="Secure"
                    description="End-to-end encrypted connections"
                  />
                  <InfoCard
                    icon={<Zap className="text-cyan-400" size={24} />}
                    title="Fast"
                    description="Real-time validation"
                  />
                  <InfoCard
                    icon={<CheckCircle2 className="text-green-400" size={24} />}
                    title="Reliable"
                    description="Accurate test results"
                  />
                </motion.div>

                {/* Form Card */}
                <motion.div
                  variants={itemVariants}
                  className="lg:col-span-2 order-1 lg:order-2"
                >
                  <div className="group relative rounded-2xl border border-white/20 bg-gradient-to-br from-slate-800/70 via-slate-800/50 to-slate-900/70 backdrop-blur-xl p-6 sm:p-8 shadow-2xl hover:border-white/30 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-cyan-600/0 group-hover:from-blue-600/10 group-hover:via-purple-600/5 group-hover:to-cyan-600/10 transition-all duration-300 pointer-events-none" />
                    
                    <div className="relative mb-8">
                      <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent mb-2">Connection Details</h3>
                      <p className="text-sm sm:text-base text-gray-400">Enter your SMTP server credentials</p>
                    </div>

                    <div className="relative space-y-6 max-h-[70vh] overflow-y-auto pr-2">
                      {/* Server Configuration */}
                      <div>
                        <label className="text-xs sm:text-sm font-semibold text-gray-300 mb-3 block flex items-center gap-2">
                          <Server size={16} className="text-blue-400 flex-shrink-0" />
                          <span>Server Configuration</span>
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                          <InputField
                            icon={<Server size={18} />}
                            placeholder="SMTP Host"
                            name="host"
                            value={form.host}
                            onChange={handleChange}
                          />
                          <InputField
                            icon={<ShieldCheck size={18} />}
                            placeholder="Port"
                            name="port"
                            value={form.port}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      {/* Authentication */}
                      <div>
                        <label className="text-xs sm:text-sm font-semibold text-gray-300 mb-3 block flex items-center gap-2">
                          <Lock size={16} className="text-purple-400 flex-shrink-0" />
                          <span>Authentication</span>
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                          <InputField
                            icon={<User size={18} />}
                            placeholder="Username"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                          />
                          <InputField
                            icon={<Lock size={18} />}
                            placeholder="Password"
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      {/* Encryption */}
                      <div>
                        <label className="text-xs sm:text-sm font-semibold text-gray-300 mb-3 block flex items-center gap-2">
                          <ShieldCheck size={16} className="text-cyan-400 flex-shrink-0" />
                          <span>Encryption Type</span>
                        </label>
                        <div className="relative">
                          <select
                            name="encryption"
                            value={form.encryption}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-white/20 bg-slate-800/50 text-white outline-none backdrop-blur-lg transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 hover:border-white/30 text-sm"
                          >
                            <option value="tls">TLS Encryption</option>
                            <option value="ssl">SSL Encryption</option>
                            <option value="none">No Encryption</option>
                          </select>
                        </div>
                      </div>

                      {/* Email Configuration */}
                      <div>
                        <label className="text-xs sm:text-sm font-semibold text-gray-300 mb-3 block flex items-center gap-2">
                          <Mail size={16} className="text-green-400 flex-shrink-0" />
                          <span>Email Configuration</span>
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                          <InputField
                            icon={<Mail size={18} />}
                            placeholder="From Email"
                            name="fromEmail"
                            value={form.fromEmail}
                            onChange={handleChange}
                          />
                          <InputField
                            icon={<User size={18} />}
                            placeholder="From Name"
                            name="fromName"
                            value={form.fromName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      {/* Test Email */}
                      <div>
                        <label className="text-xs sm:text-sm font-semibold text-gray-300 mb-3 block flex items-center gap-2">
                          <Send size={16} className="text-amber-400 flex-shrink-0" />
                          <span>Test Email Recipient</span>
                        </label>
                        <InputField
                          icon={<Mail size={18} />}
                          placeholder="test@example.com"
                          name="testEmail"
                          value={form.testEmail}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Send Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={sendTestEmail}
                        disabled={loading}
                        className="w-full mt-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-white font-bold text-base sm:text-lg shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/60 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 relative overflow-hidden group"
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        
                        {loading ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity }}
                              className="h-5 w-5"
                            >
                              <Zap size={20} />
                            </motion.div>
                            <span>Sending Email...</span>
                          </>
                        ) : (
                          <>
                            <Send size={20} />
                            <span>Send Test Email</span>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Features Section */}
            <motion.div variants={itemVariants} className="px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <FeatureCard
                  icon={<Lock className="text-blue-400" size={24} />}
                  title="256-bit Encryption"
                  description="All credentials are securely encrypted"
                />
                <FeatureCard
                  icon={<CheckCircle2 className="text-green-400" size={24} />}
                  title="Instant Results"
                  description="Get immediate validation feedback"
                />
                <FeatureCard
                  icon={<AlertCircle className="text-amber-400" size={24} />}
                  title="Detailed Errors"
                  description="Clear error messages for troubleshooting"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

function InputField({
  icon,
  ...props
}: any) {
  return (
    <div className="relative group">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-cyan-400 transition-colors duration-200">
        {icon}
      </div>
      <input
        {...props}
        className="w-full px-4 pl-12 py-3 rounded-lg border border-white/20 bg-slate-800/50 text-white placeholder:text-gray-500 outline-none backdrop-blur-lg transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 hover:border-white/40 focus:bg-slate-800/80"
      />
    </div>
  );
}

function InfoCard({ icon, title, description }: any) {
  return (
    <motion.div
      whileHover={{ translateY: -6, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)" }}
      className="group rounded-xl border border-white/20 bg-gradient-to-br from-slate-800/70 to-slate-900/50 backdrop-blur-xl p-5 transition-all hover:border-white/40 hover:shadow-lg hover:shadow-cyan-500/20"
    >
      <div className="flex items-start gap-4">
        <div className="rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-3 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-200">
          {icon}
        </div>
        <div>
          <h4 className="font-semibold text-white mb-1">{title}</h4>
          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

function FeatureCard({ icon, title, description }: any) {
  return (
    <motion.div
      whileHover={{ translateY: -8 }}
      className="group rounded-xl border border-white/20 bg-gradient-to-br from-slate-800/70 via-slate-800/50 to-slate-900/50 backdrop-blur-xl p-6 text-center transition-all hover:border-white/40 hover:shadow-lg hover:shadow-purple-500/20"
    >
      <div className="flex justify-center mb-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative group-hover:scale-110 transition-transform duration-300">{icon}</div>
      </div>
      <h4 className="font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">{title}</h4>
      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{description}</p>
    </motion.div>
  );
}