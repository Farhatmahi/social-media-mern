// import Sidebar from "@/components/Sidebar";
// import Suggestions from "@/components/Right-side/Right-Side";

// const Layout = ({ children }) => {
//   return (
//     <div className="font-Urbanist">
//       <Sidebar />
//       <div
//         // className="ml-64"
//         style={{
//           width: "calc(100vw - 256px)",
//           display: "grid",
//           gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
//           marginLeft: "256px",
//         }}
//       >
//         <div className="px-10" style={{ gridColumn: "1 / span 2" }}>
//           {children}
//         </div>
//         <Suggestions />
//       </div>
//     </div>
//   );
// };

// export default Layout;


import { useRouter } from 'next/router';
import Sidebar from "@/components/Sidebar";
import Suggestions from "@/components/Right-side/Right-Side";

const Layout = ({ children }) => {
  const router = useRouter();
  const excludePaths = ['/login', '/register'];
  const shouldExclude = excludePaths.some((path) => router.pathname === path);

  if (shouldExclude) {
    return children;
  }

  return (
    <div className="font-Urbanist">
      <Sidebar />
      <div
        style={{
          width: "calc(100vw - 256px)",
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          marginLeft: "256px",
        }}
      >
        <div className="px-10" style={{ gridColumn: "1 / span 2" }}>
          {children}
        </div>
        <Suggestions />
      </div>
    </div>
  );
};

export default Layout;
