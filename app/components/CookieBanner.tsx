"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CookieSettings from "./CookieSettings";

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setShow(false);
  };

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50"
          >
            <div className="backdrop-blur-xl bg-white/95 border border-gray-200 shadow-2xl rounded-2xl px-6 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">

              {/* TEXT */}
              <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
                We use cookies to enhance your experience, analyze traffic,
                and improve our services. You can manage your preferences at any time.
              </p>

              {/* BUTTONS */}
              <div className="flex items-center gap-3 shrink-0">

                {/* Settings (tertiary) */}
                <button
                  onClick={() => setOpenSettings(true)}
                  className="text-sm text-gray-600 hover:text-black transition"
                >
                  Settings
                </button>

                {/* Reject (secondary) */}
                <button
                  onClick={reject}
                  className="px-4 py-2 text-sm border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition"
                >
                  Reject
                </button>

                {/* Accept (primary) */}
                <button
                  onClick={accept}
                  className="px-5 py-2 text-sm bg-black text-white rounded-full hover:opacity-90 transition"
                >
                  Accept All
                </button>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SETTINGS MODAL */}
      <CookieSettings open={openSettings} setOpen={setOpenSettings} />
    </>
  );
}