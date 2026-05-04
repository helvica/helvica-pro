"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function CookieSettings({ open, setOpen }: any) {
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  const save = () => {
    localStorage.setItem(
      "cookie-settings",
      JSON.stringify({
        analytics,
        marketing,
      })
    );
    localStorage.setItem("cookie-consent", "custom");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] flex items-center justify-center px-4"
        >

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6"
          >

            <h2 className="text-lg font-semibold text-gray-900">
              Cookie Preferences
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Manage how we use cookies on this website.
            </p>

            {/* TOGGLES */}
            <div className="mt-6 space-y-5">

              {/* Essential */}
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">Essential</p>
                  <p className="text-xs text-gray-500">
                    Required for site functionality
                  </p>
                </div>
                <span className="text-xs text-gray-400">Always active</span>
              </div>

              {/* Analytics */}
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">Analytics</p>
                  <p className="text-xs text-gray-500">
                    Helps improve performance
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={() => setAnalytics(!analytics)}
                  className="w-5 h-5 accent-black"
                />
              </div>

              {/* Marketing */}
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">Marketing</p>
                  <p className="text-xs text-gray-500">
                    Used for ads and tracking
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={() => setMarketing(!marketing)}
                  className="w-5 h-5 accent-black"
                />
              </div>

            </div>

            {/* ACTIONS */}
            <div className="mt-8 flex justify-end gap-3">

              <button
                onClick={() => setOpen(false)}
                className="text-sm text-gray-500"
              >
                Cancel
              </button>

              <button
                onClick={save}
                className="px-4 py-2 bg-black text-white rounded-full text-sm"
              >
                Save Preferences
              </button>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}