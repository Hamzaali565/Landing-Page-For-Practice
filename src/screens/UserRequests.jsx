import React, { useState } from "react";
import {
  CheckCircle,
  Clock,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Header from "../components/Header";

export default function UserRequestsTable() {
  // Sample user request data
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      status: "pending",
      date: "2025-04-15",
      type: "Account Access",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@company.org",
      status: "pending",
      date: "2025-04-16",
      type: "Password Reset",
    },
    {
      id: 3,
      name: "Michael Chen",
      email: "mchen@gmail.com",
      status: "pending",
      date: "2025-04-17",
      type: "Data Export",
    },
    {
      id: 4,
      name: "Aisha Patel",
      email: "a.patel@outlook.com",
      status: "pending",
      date: "2025-04-17",
      type: "Feature Access",
    },
    {
      id: 5,
      name: "Carlos Rodriguez",
      email: "c.rodriguez@example.com",
      status: "pending",
      date: "2025-04-18",
      type: "Technical Support",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Function to handle acknowledging a request
  const acknowledgeRequest = (id) => {
    setRequests(
      requests.map((request) =>
        request.id === id ? { ...request, status: "acknowledged" } : request
      )
    );
  };

  // Filter requests based on search term
  const filteredRequests = requests.filter(
    (request) =>
      request.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredRequests.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredRequests.length / itemsPerPage);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mx-auto">
      <Header />
      <h2 className="text-2xl font-bold text-gray-800 mb-6">User Requests</h2>

      {/* Search and filters */}
      <div className="mb-6 flex items-center">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search by name, email or request type..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      {/* Requests table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200">
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Request Type
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="py-3 px-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentItems.length > 0 ? (
              currentItems.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">
                    {request.name}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500">
                    {request.email}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500">
                    {request.type}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500">
                    {request.date}
                  </td>
                  <td className="py-4 px-6 text-sm">
                    {request.status === "acknowledged" ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <CheckCircle className="mr-1" size={14} />
                        Acknowledged
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        <Clock className="mr-1" size={14} />
                        Pending
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-center">
                    <button
                      onClick={() => acknowledgeRequest(request.id)}
                      disabled={request.status === "acknowledged"}
                      className={`px-3 py-1 rounded-md ${
                        request.status === "acknowledged"
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      } transition-colors duration-200`}
                    >
                      {request.status === "acknowledged"
                        ? "Acknowledged"
                        : "Acknowledge"}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="py-4 px-6 text-sm text-center text-gray-500"
                >
                  No requests found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {filteredRequests.length > itemsPerPage && (
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-gray-500">
            Showing {indexOfFirstItem + 1} to{" "}
            {Math.min(indexOfLastItem, filteredRequests.length)} of{" "}
            {filteredRequests.length} entries
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`p-2 rounded-md ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              <ChevronLeft size={16} />
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={`p-2 rounded-md ${
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
