import { AiOutlineCalendar, AiOutlineShoppingCart } from "react-icons/ai";
import { FiShoppingBag, FiEdit } from "react-icons/fi";
import { BsKanban } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { BiColorFill } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
export const optionsData = [
  {
    id: 1,
    title: "Đi một mình",
    option: "1 phòng, 1 người lớn",
  },
  {
    id: 2,
    title: "Cặp đôi/2 người",
    option: "1 phòng, 2 người lớn",
  },
  {
    id: 3,
    title: "Theo gia đình",
    option: "1 phòng, 2 người lớn",
    numOfPeople: [1, 2],
  },
  {
    id: 4,
    title: "Theo đoàn/nhóm",
    option: "1 phòng, 2 người lớn",
    numOfPeople: [1, 2],
  },
  {
    id: 5,
    title: "Đi công tác",
    option: "1 phòng, 1 người lớn",
    numOfPeople: [1, 2],
  },
];
export const links = [
  {
    title: "Trang chủ",
    links: [
      {
        subTitle: "Kinh doanh",
        name: "ecommerce",
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: "Quản Lý Người Dùng",
    links: [
      {
        subTitle: "Đơn đặt chổ",
        name: "orders",
        icon: <AiOutlineShoppingCart />,
      },
      {
        subTitle: "Đối tác cá nhân",
        name: "providers",
        icon: <IoMdContacts />,
      },
      {
        subTitle: "Đối tác doanh nghiệp",
        name: "enterprise",
        icon: <GrGroup />,
      },
      {
        subTitle: "Khách hàng",
        name: "customers",
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: "Quản Lý Dịch Vụ",
    links: [
      {
        subTitle: "Danh sách dịch vụ",
        name: "services",
        icon: <AiOutlineCalendar />,
      },
      {
        subTitle: "Danh sách loại dịch vụ",
        name: "type-of-services",
        icon: <FiEdit />,
      },
      {
        subTitle: "Danh sách bình luận",
        name: "kanban",
        icon: <BsKanban />,
      },
    ],
  },
  // {
  //   title: "Charts",
  //   links: [
  //     {
  //       name: "line",
  //       icon: <AiOutlineStock />,
  //     },
  //     {
  //       name: "area",
  //       icon: <AiOutlineAreaChart />,
  //     },

  //     {
  //       name: "bar",
  //       icon: <AiOutlineBarChart />,
  //     },
  //     {
  //       name: "pie",
  //       icon: <FiPieChart />,
  //     },
  //     {
  //       name: "financial",
  //       icon: <RiStockLine />,
  //     },
  //     {
  //       name: "color-mapping",
  //       icon: <BsBarChart />,
  //     },
  //     {
  //       name: "pyramid",
  //       icon: <GiLouvrePyramid />,
  //     },
  //     {
  //       name: "stacked",
  //       icon: <AiOutlineBarChart />,
  //     },
  //   ],
  // },
];
export const doughnutData = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

export const lineChartData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of votes",
      data: [27, 32, 26, 28, 28, 30],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      fill: true,
      tension: 0.4,
    },
    {
      label: "Quantity",
      data: [22, 20, 16, 25, 22, 13],
      backgroundColor: "orange",
      borderColor: "red",
      fill: true,
      tension: 0.4,
    },
  ],
};
