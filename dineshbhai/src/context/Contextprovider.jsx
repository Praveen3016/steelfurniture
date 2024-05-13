import React, { useState } from "react";
import Usercontext from "./usecontext";
function Contextprovider({ children }) {
  const [user, setuser] = useState(null);
  const photos = [
    {
      id: "1",
      src: "/image/photo10.jpg",
      width: 4,
      height: 3,
      name: "Steel door",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
            color: "Black",
            dimensions: "80cm x 200cm",
            price: "RS 22,000"
    },
    {
      id: "2",
      src: "/image/photo2.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },
    {
      id: "3",
      src: "/image/photos5.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },
    {
      id: "4",
      src: "/image/photos6.jpg",
      width: 4,
      height: 3,
      name: "Metal bed ",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },
    {
      id: "5",
      src: "https://th.bing.com/th/id/OIP.R2AKyBso6dGMgV9EfDWVygHaHW?rs=1&pid=ImgDetMain",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },
    {
      id: "6",
      src: "/image/photo11.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
            color: "Black",
            dimensions: "80cm x 200cm",
            price: "RS 22,000"
    },
    {
      id: "7",
      src:"/image/IMG-20240510-WA0012.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
            color: "Black",
            dimensions: "80cm x 200cm",
            price: "RS 22,000"
    },
    {
      id: "8",
      src: "/image/IMG-20240510-WA0013.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },
    {
      id: "9",
      src: "/image/IMG-20240510-WA0014.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
            color: "Black",
            dimensions: "80cm x 200cm",
            price: "RS 22,000"
    },
    {
      id: "10",
      src: "/image/IMG-20240510-WA0019.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },
    {
      id: "11",
      src: "/image/IMG-20240510-WA0020.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },
    {
      id: "12",
      src: "/image/IMG-20240510-WA0021.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },
    {
      id: "13",
      src:"/image/IMG-20240510-WA0022.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },
    {
      id: "14",
      src:"/image/IMG-20240510-WA0023.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },    {
      id: "15",
      src:"/image/IMG-20240510-WA0024.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },  {
      id: "16",
      src:"/image/IMG-20240510-WA0025.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },  {
      id: "17",
      src:"/image/IMG-20240510-WA0026.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },  {
      id: "18",
      src:"/image/IMG-20240510-WA0027.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },  {
      id: "19",
      src:"/image/IMG-20240510-WA0029.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },  {
      id: "20",
      src:"/image/IMG-20240510-WA0039.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },  {
      id: "21",
      src:"/image/IMG-20240510-WA0040.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },  {
      id: "22",
      src:"/image/IMG-20240510-WA0043.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },  {
      id: "23",
      src:"/image/IMG-20240510-WA0044.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },  {
      id: "24",
      src:"/image/IMG-20240510-WA0045.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },  {
      id: "25",
      src:"/image/IMG-20240510-WA0046.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },  {
      id: "26",
      src:"/image/IMG-20240510-WA0047.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },  {
      id: "27",
      src:"/image/IMG-20240510-WA0049.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },  {
      id: "28",
      src:"/image/IMG-20240510-WA0050.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },  {
      id: "29",
      src:"/image/IMG-20240510-WA0052.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },  {
      id: "30",
      src:"/image/IMG-20240510-WA0054.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },  {
      id: "31",
      src:"/image/IMG-20240510-WA0055.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },  {
      id: "32",
      src:"/image/IMG-20240510-WA0057.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },  {
      id: "33",
      src:"/image/IMG-20240510-WA0058.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },  {
      id: "34",
      src:"/image/IMG-20240510-WA0059.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },  {
      id: "35",
      src:"/image/IMG-20240510-WA0062.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },  {
      id: "36",
      src:"/image/IMG-20240510-WA0065.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },{
      id: "37",
      src:"/image/IMG-20240510-WA0066.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000"
    },
  ];

  const [show, setshow] = useState(false);
  const [img, setimg] = useState("");
  const [form, setform] = useState(false);
  const [showfrom, setshow2] = useState("");
  function imgshow(img){
    setimg(img);
    setshow(true);
  }
  function formshow(name) {
    setshow2(name);
    setform(true);
  }
  return (
    <Usercontext.Provider
      value={{
        user,
        setuser,
        photos,
        setshow,
        show,
        img,
        setimg,
        imgshow,
        setform,
        formshow,
        showfrom,
        form,
        setshow2,
      }}
    >
      {children}
    </Usercontext.Provider>
  );
}

export default Contextprovider;
