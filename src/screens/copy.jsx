import React, { useEffect, useState } from "react";
import {
  CheckCircle,
  Clock,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { url } from "../constants/constant";
import { toast } from "react-toastify";
import { TbLoader2 } from "react-icons/tb";

export default function UserRequestsTable() {
  // Sample user request data
  const [requests, setRequests] = useState([
    {
      id: 1,
      username: "John Smith",
      email: "john.smith@example.com",
      status: "pending",
      createdAt: new Date(),
      type: "Account Access",
    },
  ]);
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  useEffect(() => {
    req_users();
  }, [toggle]);
  const req_users = async () => {
    try {
      const response = await fetch(`${url}/in_active_users`);
      const data = await response.json();
      if (!response.ok) {
        toast.error(data.message);
      }
      setRequests(data?.data);
    } catch (error) {
      console.log("error=>", error);
    }
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const acknowledgeRequest = async (id) => {
    try {
      setLoading(true);
      setCurrentId(id);
      const response = await fetch(`${url}/acknowledge_user`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: id }),
      });
      const data = await response.json();
      if (!response.ok) {
        toast.error(data.message);
        return;
      }
      toast.success("Request acknowledged successfully!");
      setToggle(!toggle);
    } catch (error) {
      console.log("Error acknowledging request:", error);
    } finally {
      setLoading(false);
    }
  };
  const filteredRequests = requests.filter(
    (request) =>
      request.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.email.toLowerCase().includes(searchTerm.toLowerCase())
    // ||
    // request.type.toLowerCase().includes(searchTerm.toLowerCase())
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
                    {request?.username}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500">
                    {request?.email}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500">User</td>
                  <td className="py-4 px-6 text-sm text-gray-500">
                    {request?.createdAt &&
                      new Date(request.createdAt).toLocaleString()}
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
                      onClick={() => acknowledgeRequest(request?._id)}
                      disabled={loading}
                      className={`px-3 py-1 rounded-md ${
                        request.status === "acknowledged"
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : "bg-[#F50A8B] hover:bg-pink-600 text-white font-bold inline-flex items-center gap-2"
                      } transition-colors duration-200`}
                    >
                      Acknowledge{" "}
                      {loading && currentId === request?._id && (
                        <span>
                          <TbLoader2 className="text-white text-lg animate-spin" />
                        </span>
                      )}
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
