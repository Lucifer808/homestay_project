import { AiOutlineCalendar, AiOutlineShoppingCart } from "react-icons/ai";
import { FiShoppingBag, FiEdit } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
import { BiBuildings, BiBuilding } from "react-icons/bi";
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
export const optionsImageDescData = [
  {
    id: 0,
    title: "Chọn chú thích",
  },
  {
    id: 1,
    title: "Bãi biển",
  },
  {
    id: 2,
    title: "Bãi biển riêng",
  },
  {
    id: 3,
    title: "Ban công/sân hiên",
  },
  {
    id: 4,
    title: "Bể bơi",
  },
  {
    id: 5,
    title: "Bể bơi [ngoài trời]",
  },
  {
    id: 6,
    title: "Bếp",
  },
  {
    id: 7,
    title: "Bồn tắm",
  },
  {
    id: 8,
    title: "Cảnh quan",
  },
  {
    id: 9,
    title: "Hành lang",
  },
  {
    id: 10,
    title: "Khu vực công cộng",
  },
  {
    id: 11,
    title: "Khu vực xung quanh",
  },
  {
    id: 12,
    title: "Lối vào",
  },
  {
    id: 13,
    title: "Máy sấy quần áo",
  },
  {
    id: 14,
    title: "Ngoại cảnh khách sạn",
  },
  {
    id: 15,
    title: "Nơi tham quan gần đây",
  },
  {
    id: 16,
    title: "Nội thất khách sạn",
  },
  {
    id: 17,
    title: "Phòng gia đình",
  },
  {
    id: 18,
    title: "Phòng kế hoạch",
  },
  {
    id: 19,
    title: "Phòng ngủ",
  },
  {
    id: 20,
    title: "Phòng tập",
  },
  {
    id: 21,
    title: "Phòng tắm",
  },
  {
    id: 22,
    title: "Quầy bar/Pub",
  },
  {
    id: 23,
    title: "Sơ đồ",
  },
  {
    id: 24,
    title: "Tiện nghi",
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
        subTitle: "Khách hàng",
        name: "customers",
        icon: <RiContactsLine />,
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
    ],
  },
  {
    title: "Quản Lý Dịch Vụ",
    links: [
      {
        subTitle: "Dịch vụ",
        name: "services",
        icon: <AiOutlineCalendar />,
      },
      {
        subTitle: "Loại dịch vụ",
        name: "type-of-services",
        icon: <FiEdit />,
      },
    ],
  },
  {
    title: "Quản Lý Kinh Doanh",
    links: [
      {
        subTitle: "Bình luận",
        name: "comments",
        icon: <BsChatDots />,
      },
      {
        subTitle: "Đơn đặt chổ",
        name: "orders",
        icon: <AiOutlineShoppingCart />,
      },
      {
        subTitle: "Chỗ nghỉ",
        name: "accommodation",
        icon: <BiBuilding />,
      },
      {
        subTitle: "Loại hình chỗ nghỉ",
        name: "type-of-accommodation",
        icon: <BiBuildings />,
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
export const monthData = [
  {
    id: 0,
    title: "Tháng",
  },
  {
    id: 1,
    title: "Tháng 1",
  },
  {
    id: 2,
    title: "Tháng 2",
  },
  {
    id: 3,
    title: "Tháng 3",
  },
  {
    id: 4,
    title: "Tháng 4",
  },
  {
    id: 5,
    title: "Tháng 5",
  },
  {
    id: 6,
    title: "Tháng 6",
  },
  {
    id: 7,
    title: "Tháng 7",
  },
  {
    id: 8,
    title: "Tháng 8",
  },
  {
    id: 9,
    title: "Tháng 9",
  },
  {
    id: 10,
    title: "Tháng 10",
  },
  {
    id: 11,
    title: "Tháng 11",
  },
  {
    id: 12,
    title: "Tháng 12",
  },
];

export const dayData = [
  {
    id: 0,
    title: "Ngày",
  },
  {
    id: 1,
    title: 1,
  },
  {
    id: 2,
    title: 2,
  },
  {
    id: 3,
    title: 3,
  },
  {
    id: 4,
    title: 4,
  },
  {
    id: 5,
    title: 5,
  },
  {
    id: 6,
    title: 6,
  },
  {
    id: 7,
    title: 7,
  },
  {
    id: 8,
    title: 8,
  },
  {
    id: 9,
    title: 9,
  },
  {
    id: 10,
    title: 10,
  },
  {
    id: 11,
    title: 11,
  },
  {
    id: 12,
    title: 12,
  },
  {
    id: 13,
    title: 13,
  },
  {
    id: 14,
    title: 14,
  },
  {
    id: 15,
    title: 15,
  },
  {
    id: 16,
    title: 16,
  },
  {
    id: 17,
    title: 17,
  },
  {
    id: 18,
    title: 18,
  },
  {
    id: 19,
    title: 19,
  },
  {
    id: 20,
    title: 20,
  },
  {
    id: 21,
    title: 21,
  },
  {
    id: 22,
    title: 22,
  },
  {
    id: 23,
    title: 23,
  },
  {
    id: 24,
    title: 24,
  },
  {
    id: 25,
    title: 25,
  },
  {
    id: 26,
    title: 26,
  },
  {
    id: 27,
    title: 27,
  },
  {
    id: 28,
    title: 28,
  },
  {
    id: 29,
    title: 29,
  },
  {
    id: 30,
    title: 30,
  },
  {
    id: 31,
    title: 31,
  },
];

export const yearData = [
  {
    id: 0,
    title: "Năm",
  },
  {
    id: 1,
    title: 1922,
  },
  {
    id: 2,
    title: 1923,
  },
  {
    id: 3,
    title: 1924,
  },
  {
    id: 4,
    title: 1925,
  },
  {
    id: 5,
    title: 1926,
  },
  {
    id: 6,
    title: 1927,
  },
  {
    id: 7,
    title: 1928,
  },
  {
    id: 8,
    title: 1929,
  },
  {
    id: 9,
    title: 1930,
  },
  {
    id: 10,
    title: 1931,
  },
  {
    id: 11,
    title: 1932,
  },
  {
    id: 12,
    title: 1933,
  },
  {
    id: 13,
    title: 1934,
  },
  {
    id: 14,
    title: 1935,
  },
  {
    id: 15,
    title: 1936,
  },
  {
    id: 16,
    title: 1937,
  },
  {
    id: 17,
    title: 1938,
  },
  {
    id: 18,
    title: 1939,
  },
  {
    id: 19,
    title: 1940,
  },
  {
    id: 20,
    title: 1941,
  },
  {
    id: 21,
    title: 1942,
  },
  {
    id: 22,
    title: 1943,
  },
  {
    id: 23,
    title: 1944,
  },
  {
    id: 24,
    title: 1945,
  },
  {
    id: 25,
    title: 1946,
  },
  {
    id: 26,
    title: 1947,
  },
  {
    id: 27,
    title: 1948,
  },
  {
    id: 28,
    title: 1949,
  },
  {
    id: 29,
    title: 1950,
  },
  {
    id: 30,
    title: 1951,
  },
  {
    id: 31,
    title: 1952,
  },
  {
    id: 32,
    title: 1953,
  },
  {
    id: 33,
    title: 1954,
  },
  {
    id: 34,
    title: 1955,
  },
  {
    id: 35,
    title: 1956,
  },
  {
    id: 36,
    title: 1957,
  },
  {
    id: 37,
    title: 1958,
  },
  {
    id: 38,
    title: 1959,
  },
  {
    id: 39,
    title: 1960,
  },
  {
    id: 40,
    title: 1961,
  },
  {
    id: 41,
    title: 1962,
  },
  {
    id: 42,
    title: 1963,
  },
  {
    id: 43,
    title: 1964,
  },
  {
    id: 44,
    title: 1965,
  },
  {
    id: 45,
    title: 1966,
  },
  {
    id: 46,
    title: 1967,
  },
  {
    id: 47,
    title: 1968,
  },
  {
    id: 48,
    title: 1969,
  },
  {
    id: 49,
    title: 1970,
  },
  {
    id: 50,
    title: 1972,
  },
  {
    id: 51,
    title: 1973,
  },
  {
    id: 52,
    title: 1974,
  },
  {
    id: 53,
    title: 1975,
  },
  {
    id: 54,
    title: 1976,
  },
  {
    id: 55,
    title: 1977,
  },
  {
    id: 56,
    title: 1978,
  },
  {
    id: 57,
    title: 1979,
  },
  {
    id: 58,
    title: 1980,
  },
  {
    id: 59,
    title: 1981,
  },
  {
    id: 60,
    title: 1982,
  },
  {
    id: 61,
    title: 1983,
  },
  {
    id: 62,
    title: 1984,
  },
  {
    id: 63,
    title: 1985,
  },
  {
    id: 64,
    title: 1986,
  },
  {
    id: 65,
    title: 1987,
  },
  {
    id: 66,
    title: 1988,
  },
  {
    id: 67,
    title: 1989,
  },
  {
    id: 68,
    title: 1990,
  },
  {
    id: 69,
    title: 1991,
  },
  {
    id: 70,
    title: 1992,
  },
  {
    id: 71,
    title: 1993,
  },
  {
    id: 72,
    title: 1994,
  },
  {
    id: 73,
    title: 1995,
  },
  {
    id: 74,
    title: 1996,
  },
  {
    id: 75,
    title: 1997,
  },
  {
    id: 76,
    title: 1998,
  },
  {
    id: 77,
    title: 1999,
  },
  {
    id: 78,
    title: 2000,
  },
  {
    id: 79,
    title: 2001,
  },
  {
    id: 80,
    title: 2002,
  },
  {
    id: 81,
    title: 2003,
  },
  {
    id: 82,
    title: 2004,
  },
  {
    id: 83,
    title: 2005,
  },
  {
    id: 84,
    title: 2006,
  },
  {
    id: 85,
    title: 2007,
  },
  {
    id: 86,
    title: 2008,
  },
  {
    id: 87,
    title: 2009,
  },
  {
    id: 88,
    title: 2010,
  },
  {
    id: 89,
    title: 2011,
  },
  {
    id: 90,
    title: 2012,
  },
  {
    id: 91,
    title: 2013,
  },
  {
    id: 92,
    title: 2014,
  },
  {
    id: 93,
    title: 2015,
  },
  {
    id: 94,
    title: 2016,
  },
  {
    id: 95,
    title: 2017,
  },
  {
    id: 96,
    title: 2018,
  },
  {
    id: 97,
    title: 2019,
  },
  {
    id: 98,
    title: 2020,
  },
  {
    id: 99,
    title: 2021,
  },
  {
    id: 100,
    title: 2022,
  },
];

export const rentalRegistrationsData = [
  {
    id: 1,
    value: "Đang hoạt động",
    title: "Duyệt đơn đăng ký",
  },
  {
    id: 2,
    value: "Không hợp lệ",
    title: "Từ chối đơn đăng ký",
  },
];

export const typeRoomPicker = [
  {
    id: 1,
    title: "Giường đôi - 2 người",
  },
  {
    id: 2,
    title: "Giường đôi - Hường vườn",
  },
  {
    id: 3,
    title: "Giường đôi - Giường Queen",
  },
  {
    id: 4,
    title: "Giường đôi - Có phòng tắm chung",
  },
  {
    id: 5,
    title: "Phòng giường đôi và giường đơn",
  },
  {
    id: 6,
    title: "Giường đôi Basic",
  },
  {
    id: 7,
    title: "Phòng giường đôi Có máy tính",
  },
  {
    id: 8,
    title: "Phòng giường đôi Có quạt",
  },
  {
    id: 9,
    title: "Phòng phổ thông giường đôi",
  },
  {
    id: 10,
    title: "Phòng con nhộng giường đôi",
  },
  {
    id: 11,
    title: "Studio có ban công",
  },
  {
    id: 12,
    title: "Phòng Executive với Ban Công",
  },
  {
    id: 13,
    title: "Phòng 1 góc hướng biển",
  },
  {
    id: 14,
    title: "Căn hộ Studio",
  },
  {
    id: 15,
    title: "Studio hướng biển",
  },
  {
    id: 16,
    title: "Suite lớn hướng biển có sân hiên",
  },
  {
    id: 17,
    title: "Phòng Sky",
  },
  {
    id: 18,
    title: "Phòng gia đình",
  },
];

export const numberPicker = [
  {
    value: 1,
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
  {
    value: 4,
  },
  {
    value: 5,
  },
  {
    value: 6,
  },
  {
    value: 7,
  },
  {
    value: 8,
  },
  {
    value: 9,
  },
  {
    value: 10,
  },
];
export const viewPicker = [
  {
    id: 1,
    title: "Không rõ",
  },
  {
    id: 2,
    title: "Đại dương",
  },
  {
    id: 3,
    title: "Vườn",
  },
  {
    id: 4,
    title: "Bể bơi",
  },
  {
    id: 5,
    title: "Thành phố",
  },
  {
    id: 6,
    title: "Công viên",
  },
  {
    id: 7,
    title: "Công viên",
  },
  {
    id: 8,
    title: "Núi",
  },
  {
    id: 9,
    title: "Hồ",
  },
  {
    id: 10,
    title: "Sông",
  },
  {
    id: 11,
    title: "Bải biển",
  },
  {
    id: 12,
    title: "Cảng",
  },
  {
    id: 13,
    title: "Đại dương (một góc)",
  },
  {
    id: 14,
    title: "Không có cảnh",
  },
  {
    id: 15,
    title: "Biển",
  },
  {
    id: 16,
    title: "Biển (một góc)",
  },
  {
    id: 17,
    title: "Đồng quê",
  },
  {
    id: 18,
    title: "Thiên nhiên",
  },
  {
    id: 19,
    title: "Dường phố",
  },
  {
    id: 20,
    title: "Bến thuyền",
  },
  {
    id: 21,
    title: "Vịnh",
  },
  {
    id: 22,
    title: "Thung lũng",
  },
  {
    id: 23,
    title: "Nông thôn",
  },
  {
    id: 24,
    title: "Cảnh đêm",
  },
];
