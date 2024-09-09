import { IoIosStar } from "react-icons/io";

const Ticket = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="flex justify-between gap-6 shadow-lg bg-[#eeeade]">
        {/* first section */}
        <div className="pt-3">
          <img
            src="https://th.bing.com/th/id/R.dcf4b6e228aef80dd1a58f4c76f07128?rik=Qj2LybacmBALtA&riu=http%3a%2f%2fpngimg.com%2fuploads%2fqr_code%2fqr_code_PNG25.png&ehk=eKH2pdoegouCUxO1rt6BJXt4avVYywmyOS8biIPp5zc%3d&risl=&pid=ImgRaw&r=0"
            className="w-[100px]"
          />
          <p className="text-[10px] pl-2">38756398005939</p>
        </div>
        {/* second section */}
        <div className="flex flex-col gap-4 border-x border-gray-400 pt-3">
          <div className="text-3xl font-bold uppercase px-2">
            <p>Stree2, 1-Day</p>
            <p>general admission</p>
          </div>
          <div className="flex justify-between px-2">
            <div className="">
              <p className="text-sm font-semibold">15:00:00</p>
              <p className="text-[10px]">28 sept 2024</p>
            </div>

            <div className="">
              <p className="text-sm font-semibold">Grand HightStreet</p>
              <p className="text-[10px]">Bhopal,india</p>
            </div>
          </div>
          <div className="flex items-center justify-between border-y border-gray-400 w-full px-2">
            <div className="border-r border-gray-400 pr-3 text-[12px]">
              <p>Owner</p>
              <p className="font-semibold">Avinash Yede Avinash Yede </p>
            </div>
            <hr />
            <div className="pl-3 text-[12px]">
              <p>Email</p>
              <p className="font-semibold">AvinsshYede110@gmail.com</p>
            </div>
          </div>
        </div>

        {/* third section */}
        <div className="pt-3">
          <div className="flex justify-end px-4 ">
            <div className="flex">
              <p className="uppercase text-sm font-semibold">1000.00 $ Free </p>
              <IoIosStar />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center h-[100px] ">
            <div>
              <p className="text-[12px]">Your Balance</p>
              <p className="text-2xl font-bold">2100.00 $</p>
            </div>
          </div>
      
          <div className="flex flex-col justify-end w-full">
            <div className="border border-gray-400">
              <button className="uppercase  py-2 px-3">Unassign</button>
              <button className="text-white bg-primary border py-2 px-3">
                Download
              </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ticket;
