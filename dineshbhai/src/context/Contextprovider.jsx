import React, { useState } from "react";
import Usercontext from "./usecontext";
function Contextprovider({ children }) {
  const [user, setuser] = useState(null);
  const photos = [
    {
      id: "1",
      src: "https://floridapolitics.com/wp-content/uploads/2021/01/steel-worker.jpg",
      width: 4,
      height: 3,
      name: "Steel door",
    },
    {
      id: "2",
      src: "https://images.pexels.com/photos/204275/pexels-photo-204275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      width: 4,
      height: 3,
      name: "Jewelry Software",
    },
    {
      id: "3",
      src: "https://images.pexels.com/photos/207367/pexels-photo-207367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      width: 4,
      height: 3,
      name: "Jewelry Software",
    },
    {
      id: "4",
      src: "https://images.pexels.com/photos/162529/grinder-hitachi-power-tool-flexible-162529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      width: 4,
      height: 3,
      name: "Jewelry Software",
    },
    {
      id: "5",
      src: "https://i0.wp.com/www.cleantechloops.com/wp-content/uploads/2020/09/steel-interior-decoration-scaled.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
    },
    {
      id: "6",
      src: "https://www.spaceguard.co.uk/wp-content/uploads/2021/01/IMG_20210111_153847.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
    },
    {
      id: "7",
      src: "https://th.bing.com/th/id/OIP.0l5XzcD6oq0lH3sgIp2XowHaE3?rs=1&pid=ImgDetMain",
      width: 4,
      height: 3,
      name: "Jewelry Software",
    },
    {
      id: "8",
      src: "https://kennystairs-railings.com/image_upload/full/RI-002a.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
    },
    {
      id: "9",
      src: "https://th.bing.com/th/id/R.068ab7e99733ba73f081fc72f36f4c63?rik=O33LyWUM8o98yg&riu=http%3a%2f%2fwww.homedepot.com%2fcatalog%2fproductImages%2f1000%2fc1%2fc1f827d0-3d69-46e3-9c4b-e51a83a68c66_1000.jpg&ehk=oKHg2hNkRvyW5nkHDFR5%2bn2JXsmmS67lKiFh4vRCmgg%3d&risl=&pid=ImgRaw&r=0",
      width: 4,
      height: 3,
      name: "Jewelry Software",
    },
    {
      id: "10",
      src: "https://th.bing.com/th/id/OIP.HXb4XYxpPIGKCAEpLJnKHAAAAA?rs=1&pid=ImgDetMain",
      width: 4,
      height: 3,
      name: "Jewelry Software",
    },
    {
      id: "11",
      src: "https://th.bing.com/th/id/OIP.NYMF0umvchVgvzsuWknMEAAAAA?w=310&h=310&rs=1&pid=ImgDetMain",
      width: 4,
      height: 3,
      name: "Jewelry Software",
    },
    {
      id: "12",
      src: "https://th.bing.com/th/id/OIP.21q1c5CsuozchstoZhREkgHaFL?rs=1&pid=ImgDetMain",
      width: 4,
      height: 3,
      name: "Jewelry Software",
    },
    {
      id: "13",
      src: "https://imgres.tailbase.com/rzdimg/prods/800/682200_1.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
    },
  ];

  const [show, setshow] = useState(false);
  const [img, setimg] = useState("");
  const [form, setform] = useState(false);
  const [showfrom, setshow2] = useState("");
  function imgshow(img) {
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
