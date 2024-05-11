import React, { useState ,useEffect } from "react";
import Usercontext from "./usecontext";
function Contextprovider({ children }) {
  const [user, setuser] = useState(null);
  const [products , setProducts] = useState([]);

  useEffect(() => {
    async function getProduct() {
        try {
            const res = await fetch('http://localhost:8888/api/products');
            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await res.json();
            console.log(data);
            setProducts(data);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    }

    getProduct();
}, []);
  // const photos = [
  //   {
  //     id: "1",
  //     src: "https://th.bing.com/th/id/OIP.k0baJL05oKFoXgfjYkeLZAHaFj?w=233&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  //     width: 4,
  //     height: 3,
  //     name: "Steel door",
  //     p:"steel bed (queen bed)",
  //     price:"RS 22,00/-"
  //   },
  //   {
  //     id: "2",
  //     src: "https://th.bing.com/th/id/OIP.7WdAxGyREPo9yPBoakdqNwHaFR?w=259&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  //     width: 4,
  //     height: 3,
  //     name: "Jewelry Software",
  //     p:"steel bed (queen bed)",
  //     price:"200$"
  //   },
  //   {
  //     id: "3",
  //     src: "https://th.bing.com/th/id/OIP.gzaVIKcqV747LY99fBeQOgHaHa?w=175&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  //     width: 4,
  //     height: 3,
  //     name: "Jewelry Software",
  //     p:"steel bed (queen bed)",
  //     price:"200$"
  //   },
  //   {
  //     id: "4",
  //     src: "https://3.bp.blogspot.com/-PtmNOO9Q8sw/TsyrEiZjtxI/AAAAAAAAGNM/xvtWFcg0uC8/s1600/steel+metal+furniture+designs.+%25282%2529.jpg",
  //     width: 4,
  //     height: 3,
  //     name: "Metal bed ",
  //     p:"steel bed (queen bed)",
  //     price:"200$"
  //   },
  //   {
  //     id: "5",
  //     src: "https://th.bing.com/th/id/OIP.R2AKyBso6dGMgV9EfDWVygHaHW?rs=1&pid=ImgDetMain",
  //     width: 4,
  //     height: 3,
  //     name: "Jewelry Software",
  //     p:"steel bed (queen bed)",
  //     price:"200$"
  //   },
  //   {
  //     id: "6",
  //     src: "https://th.bing.com/th/id/OIP.Q5H-bm-20vDaohTqhVsYuwHaFj?rs=1&pid=ImgDetMain",
  //     width: 4,
  //     height: 3,
  //     name: "Jewelry Software",
  //     p:"steel bed (queen bed)",
  //     price:"200$"
  //   },
  //   {
  //     id: "7",
  //     src: "https://th.bing.com/th/id/OIP.cMwuuCThNt7_eouc1yzJUwHaDj?rs=1&pid=ImgDetMain",
  //     width: 4,
  //     height: 3,
  //     name: "Jewelry Software",
  //     p:"steel bed (queen bed)",
  //     price:"200$"
  //   },
  //   {
  //     id: "8",
  //     src: "https://kennystairs-railings.com/image_upload/full/RI-002a.jpg",
  //     width: 4,
  //     height: 3,
  //     name: "Jewelry Software",
  //     p:"steel bed (queen bed)",
  //     price:"200$"
  //   },
  //   {
  //     id: "9",
  //     src: "https://th.bing.com/th/id/OIP.T162brVJi1zsdGqWMrXeqQHaF4?rs=1&pid=ImgDetMain",
  //     width: 4,
  //     height: 3,
  //     name: "Jewelry Software",
  //     p:"steel bed (queen bed)",
  //     price:"200$"
  //   },
  //   {
  //     id: "10",
  //     src: "https://th.bing.com/th/id/OIP.HXb4XYxpPIGKCAEpLJnKHAAAAA?rs=1&pid=ImgDetMain",
  //     width: 4,
  //     height: 3,
  //     name: "Jewelry Software",
  //     p:"steel bed (queen bed)",
  //     price:"200$"
  //   },
  //   {
  //     id: "11",
  //     src: "https://th.bing.com/th/id/OIP.NYMF0umvchVgvzsuWknMEAAAAA?w=310&h=310&rs=1&pid=ImgDetMain",
  //     width: 4,
  //     height: 3,
  //     name: "Jewelry Software",
  //     p:"steel bed (queen bed)",
  //     price:"200$"
  //   },
  //   {
  //     id: "12",
  //     src: "https://th.bing.com/th/id/OIP.21q1c5CsuozchstoZhREkgHaFL?rs=1&pid=ImgDetMain",
  //     width: 4,
  //     height: 3,
  //     name: "Jewelry Software",
  //     p:"steel bed (queen bed)",
  //     price:"200$"
  //   },
  //   {
  //     id: "13",
  //     src: "https://imgres.tailbase.com/rzdimg/prods/800/682200_1.jpg",
  //     width: 4,
  //     height: 3,
  //     name: "Jewelry Software",
  //     p:"steel bed (queen bed)",
  //     price:"200$"
  //   },
  // ];

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
        products,
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
