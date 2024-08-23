import { Outlet } from "react-router";
export function Layout() {
  return (
    <div className="layout">
      <div className="layout-header">Header</div>
      <div className="layout-nav">Content</div>
      <div className="layout-outLet">Footer</div>
      <Outlet />
    </div>
  );
}
