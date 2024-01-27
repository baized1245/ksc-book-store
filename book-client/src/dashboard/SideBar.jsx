import React, { useContext } from "react";
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import userImg from "../assets/profile.jpg";
import { AuthContext } from "../context/AuthProvider";

const SideBar = () => {

  const { user } = useContext(AuthContext);

  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo href="#" img={user?.photoURL} imgAlt={`userImg`} className="h-16 w-16 rounded">
        <p>{user?.displayName || user?.email}</p>
      </Sidebar.Logo>

      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {/* <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            <p>Dashboard</p>
          </Sidebar.Item> */}
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            <p>Upload Book</p>
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            <p>Manage Books</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            <p>Users</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            <p>Products</p>
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            <p>Log Out</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;
