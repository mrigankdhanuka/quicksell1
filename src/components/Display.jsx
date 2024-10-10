import React from "react";
import Card from "./Card";
import AddIcon from "../assets/add.svg";
import dotIcon from "../assets/3 dot menu.svg";

import P3 from "../assets/Img - High Priority.svg";
import P2 from "../assets/Img - Medium Priority.svg";
import P1 from "../assets/Img - Low Priority.svg";
import P0 from "../assets/No-priority.svg";
import P4 from "../assets/SVG - Urgent Priority colour.svg";

import S0 from "../assets/Backlog.svg";
import S1 from "../assets/To-do.svg";
import S2 from "../assets/in-progress.svg";
import S3 from "../assets/Done.svg";
import S4 from "../assets/Cancelled.svg";

const Display = ({ tickets, users, groupBy, orderBy }) => {
  // Group tickets based on the groupBy property
  const groupTickets = (tickets, groupBy) => {
    return tickets.reduce((acc, ticket) => {
      const key = ticket[groupBy] || "0";
      if (!acc[key]) acc[key] = [];
      acc[key].push(ticket);
      return acc;
    }, {});
  };

  // Sort tickets within each group based on the orderBy property
  const sortTickets = (groupedTickets, sortBy) => {
    Object.keys(groupedTickets).forEach((group) => {
      groupedTickets[group].sort((a, b) => {
        if (orderBy === "priority") return b.priority - a.priority;
        if (orderBy === "title") return a.title.localeCompare(b.title);
        return 0;
      });
    });
    return groupedTickets;
  };

  // Find the related user based on userId
  const relatedUser = (userId) => {
    return users.filter((u) => u.id === userId);
  };

  const groupedTickets = groupTickets(tickets, groupBy);
  const orderedGroupedTickets = sortTickets(groupedTickets, orderBy);

  return (
    <div className="Display">
      {Object.keys(orderedGroupedTickets).map((orderKey, index) => (
        <div key={index} className="Display-Horizon">
          <div className="Display2">
            <div className="Display1">
              <div>
                {groupBy === "status" && (
                  <img
                    src={
                      orderKey === "Todo"
                        ? S1
                        : orderKey === "In Progress"
                        ? S2
                        : orderKey === "Backlog"
                        ? S0
                        : orderKey === "Done"
                        ? S3
                        : S4
                    }
                    className="imagDisp1"
                    alt="status"
                  />
                )}
                {groupBy === "priority" && (
                  <img
                    src={
                      orderKey === 1
                        ? P1
                        : orderKey === 2
                        ? P2
                        : orderKey === 3
                        ? P3
                        : orderKey === 4
                        ? P4
                        : P0
                    }
                    className="imagDisp1"
                    alt="priority"
                  />
                )}
                {groupBy === "userId" && (
                  <img
                    src={`https://api.dicebear.com/5.x/initials/svg?seed=${
                      relatedUser(orderedGroupedTickets[orderKey][0].userId)[0]
                        .name
                    }`}
                    className="imagDisp"
                    alt="user"
                  />
                )}
              </div>
              <h2>
                {groupBy === "userId"
                  ? relatedUser(orderKey)?.[0]?.name
                  : orderKey}{" "}
              </h2>
              <div className="DisplayNum">
                {orderedGroupedTickets[orderKey].length}
              </div>
            </div>
            <div className="Display1">
              <img src={AddIcon} alt="Add" className="imagDisp1" />
              <img src={dotIcon} alt="Menu" className="imagDisp1" />
            </div>
          </div>

          {orderedGroupedTickets[orderKey].map((ticket) => (
            <Card
              key={ticket?.id}
              ticket={ticket}
              user={relatedUser(ticket?.userId)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Display;
