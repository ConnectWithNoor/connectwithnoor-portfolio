"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

function Alert() {
  const params = useSearchParams();
  const [meetingInfo, setMeetingInto] = useState<Record<string, string> | null>(
    null
  );

  useEffect(() => {
    if (params?.get("event_type_uuid")) {
      let currentQuery: Record<string, string> = {};

      for (const [key, value] of params.entries()) {
        currentQuery[key] = value;
      }

      setMeetingInto(currentQuery);
    } else {
      setMeetingInto(null);
    }
  }, [params]);

  console.log(meetingInfo);

  if (meetingInfo) {
    toast.success(
      <div className="toaster">
        <h3>You made the good decision</h3>
        <p>
          Hey <span>{meetingInfo.invitee_full_name}</span>, Thank you for
          scheduling a meeting with me! I appreciate the opportunity to connect
          with you and bring your project to life.
        </p>

        <p>You might have received an email. Please feel free to check.</p>
        <p>
          <span>Meeting Title:</span> {meetingInfo.event_type_name}
        </p>
        <p>
          <span>Meeting Date:</span>{" "}
          {new Date(meetingInfo.event_start_time).toLocaleString()}
        </p>

        <p>
          Feel free to reach out to me if you have any questions or concerns
          before our meeting. See you soon!
        </p>
        <p>
          Regards,
          <p>
            <span>Noor Muhammad</span>
          </p>
        </p>
      </div>,
      {
        position: "top-center",
        duration: 50000,
        style: {
          display: "block",
        },
      }
    );
  }

  return null;
}

export default Alert;
