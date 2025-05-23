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
import InfiniteScroll from "react-infinite-scroll-component";

// let mock_enteries = [
//   {
//     username: "john_doe",
//     email: "john@example.com",
//     role: "User",
//     createdAt: "2025-04-30T16:42:42.702Z",
//   },
//   {
//     username: "jane_smith",
//     email: "jane@example.com",
//     role: "User",
//     createdAt: "2025-04-29T14:15:22.123Z",
//   },
//   {
//     username: "alex_walker",
//     email: "alex@example.com",
//     role: "User",
//     createdAt: "2025-04-28T09:50:10.541Z",
//   },
//   {
//     username: "sara_lee",
//     email: "sara@example.com",
//     role: "User",
//     createdAt: "2025-04-27T11:32:05.234Z",
//   },
//   {
//     username: "mike_jordan",
//     email: "mike@example.com",
//     role: "User",
//     createdAt: "2025-04-26T13:45:33.678Z",
//   },
//   {
//     username: "lisa_wong",
//     email: "lisa@example.com",
//     role: "User",
//     createdAt: "2025-04-25T10:12:00.777Z",
//   },
//   {
//     username: "david_clark",
//     email: "david@example.com",
//     role: "User",
//     createdAt: "2025-04-24T08:20:45.345Z",
//   },
//   {
//     username: "emma_watson",
//     email: "emma@example.com",
//     role: "User",
//     createdAt: "2025-04-23T18:05:17.999Z",
//   },
//   {
//     username: "oliver_king",
//     email: "oliver@example.com",
//     role: "User",
//     createdAt: "2025-04-22T16:25:01.456Z",
//   },
//   {
//     username: "ava_taylor",
//     email: "ava@example.com",
//     role: "User",
//     createdAt: "2025-04-21T12:30:22.321Z",
//   },
//   {
//     username: "liam_moore",
//     email: "liam@example.com",
//     role: "User",
//     createdAt: "2025-04-20T09:40:55.654Z",
//   },
//   {
//     username: "noah_hall",
//     email: "noah@example.com",
//     role: "User",
//     createdAt: "2025-04-19T14:10:10.678Z",
//   },
//   {
//     username: "sophia_white",
//     email: "sophia@example.com",
//     role: "User",
//     createdAt: "2025-04-18T11:00:00.432Z",
//   },
//   {
//     username: "william_adams",
//     email: "william@example.com",
//     role: "User",
//     createdAt: "2025-04-17T15:15:15.890Z",
//   },
//   {
//     username: "mia_thomas",
//     email: "mia@example.com",
//     role: "User",
//     createdAt: "2025-04-16T17:25:30.123Z",
//   },
//   {
//     username: "ethan_scott",
//     email: "ethan@example.com",
//     role: "User",
//     createdAt: "2025-04-15T08:45:10.567Z",
//   },
//   {
//     username: "isabella_morris",
//     email: "isabella@example.com",
//     role: "User",
//     createdAt: "2025-04-14T10:35:48.789Z",
//   },
//   {
//     username: "james_wright",
//     email: "james@example.com",
//     role: "User",
//     createdAt: "2025-04-13T13:20:05.231Z",
//   },
//   {
//     username: "charlotte_green",
//     email: "charlotte@example.com",
//     role: "User",
//     createdAt: "2025-04-12T09:55:37.600Z",
//   },
//   {
//     username: "benjamin_wood",
//     email: "benjamin@example.com",
//     role: "User",
//     createdAt: "2025-04-11T07:00:00.000Z",
//   },
// ];

// const ITEMS_PER_LOAD = 5;

export default function UserRequestsTable() {
  // Sample user request data
  const [requests, setRequests] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  // const [visibleUsers, setVisibleUsers] = useState(
  //   mock_enteries.slice(0, ITEMS_PER_LOAD)
  // );
  const [visibleUsers, setVisibleUsers] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  // const fetchMoreData = () => {
  //   const next = mock_enteries.slice(
  //     visibleUsers.length,
  //     visibleUsers.length + ITEMS_PER_LOAD
  //   );
  //   setVisibleUsers([...visibleUsers, ...next]);

  //   if (visibleUsers.length + ITEMS_PER_LOAD >= mock_enteries.length) {
  //     setHasMore(false);
  //   }
  // };

  const fetchMoreData = async () => {
    try {
      const response = await fetch(
        `${url}/page_user?avoid=${visibleUsers.length}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        setHasMore(false);
        return;
      }
      setVisibleUsers([...visibleUsers, ...data?.data]);
    } catch (error) {
      console.log("error =>", error);
    }
  };

  // useEffect(() => {
  //   req_users();
  // }, [toggle]);

  useEffect(() => {
    fetchMoreData();
  }, []);

  // const req_users = async () => {
  //   try {
  //     const response = await fetch(`${url}/in_active_users`, {
  //       credentials: "include",
  //     });
  //     const data = await response.json();
  //     if (!response.ok) {
  //       toast.error(data.message);
  //     }
  //     // setRequests(data?.data);
  //     setRequests(Array.isArray(data?.data) ? data.data : []);
  //   } catch (error) {
  //     console.log("error=>", error);
  //     setRequests([]);
  //   }
  // };

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
        credentials: "include",
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
  const filteredRequests = (requests || []).filter(
    (request) =>
      request.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredRequests.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredRequests.length / itemsPerPage);

  const handleInput = (value, item, key) => {
    const updatedValue = visibleUsers.map((readVal) => {
      if (item?._id === readVal?._id) {
        if (value === "product_list") {
          return {
            ...readVal,
            product_list: true,
            advantia_list: false,
            integra_list: false,
          };
        } else if (value === "advantia_list") {
          return {
            ...readVal,
            advantia_list: true,
            product_list: false,
            integra_list: false,
          };
        } else if (value === "integra_list") {
          return {
            ...readVal,
            advantia_list: false,
            product_list: false,
            integra_list: true,
          };
        } else if (key === "status") {
          return { ...readVal, status: value };
        }
      }
      return readVal;
    });
    console.log(updatedValue);
    setVisibleUsers(updatedValue);
  };

  const update_visible_user = async (item) => {
    setLoading(true);
    setCurrentId(item?._id);
    try {
      const response = await fetch(`${url}/visible_list`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: item?._id,
          product_list: item?.product_list,
          advantia_list: item?.advantia_list,
          integra_list: item?.integra_list,
          status: item?.status,
        }),
        credentials: "include",
      });
      const data = await response.json();
      if (!response.ok) {
        toast.error(data?.message);
        return;
      }
      toast.success("Record updated successfully");
    } catch (error) {
      console.log("error -->", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-6 mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Price List Control To User
        </h2>

        {/* Search and filters */}
        {/* <div className="mb-6 flex items-center">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search by name, email or request type..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
          </div>
        </div> */}

        {/* Requests table */}
        <div className=" overflow-x-auto">
          <InfiniteScroll
            dataLength={visibleUsers.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={
              <tr>
                <td colSpan="6" className="text-center py-4">
                  Loading...
                </td>
              </tr>
            }
            endMessage={
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No more users to show.
                </td>
              </tr>
            }
            scrollableTarget={null}
            className=""
          >
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
                    Products List
                  </th>
                  {/* <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Advantia List
                  </th> */}
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Verify User
                  </th>
                  <th className="py-3 px-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="border-2">
                {visibleUsers.map((request) => (
                  <tr key={request.email} className="hover:bg-gray-50">
                    <td className="py-4 px-6 text-sm font-medium text-gray-900">
                      {request?.username}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500">
                      {request?.email}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500">
                      <select
                        name="lists"
                        id="list"
                        onChange={(e) => handleInput(e.target.value, request)}
                      >
                        <option
                          value="product_list"
                          selected={request?.product_list ? true : false}
                        >
                          Product List
                        </option>
                        <option
                          value="advantia_list"
                          selected={request?.advantia_list ? true : false}
                        >
                          Advantia List
                        </option>
                        <option
                          value="integra_list"
                          selected={request?.integra_list ? true : false}
                        >
                          Integra List
                        </option>
                      </select>
                    </td>
                    <td className="py-4 px-6 text-sm">
                      <span className="py-4 px-6 text-sm text-gray-500">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          checked={request?.status}
                          onChange={(e) =>
                            handleInput(e.target.checked, request, "status")
                          }
                        />
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-center">
                      {/* <button
                        onClick={() => update_visible_user(request)}
                        className="px-3 py-1 rounded-md bg-[#F50A8B] hover:bg-pink-600 text-white font-bold"
                      >
                        Allow
                      </button> */}
                      <button
                        onClick={() => update_visible_user(request)}
                        disabled={loading}
                        className={`px-3 py-1 rounded-md ${
                          request.status === "acknowledged"
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-[#F50A8B] hover:bg-pink-600 text-white font-bold inline-flex items-center gap-2"
                        } transition-colors duration-200`}
                      >
                        Allow{" "}
                        {loading && currentId === request?._id && (
                          <span>
                            <TbLoader2 className="text-white text-lg animate-spin" />
                          </span>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
}
