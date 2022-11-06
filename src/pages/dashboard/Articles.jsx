import React, { useEffect } from "react";
import LayoutDashboard from "../../Layout/LayoutDashboard";
import { AiFillDelete } from "react-icons/ai";
import { RiEditFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import Modal from "../../components/Modal";
import { useState } from "react";
import AddArticle from "../../components/AddArticle";
import { useDispatch, useSelector } from "react-redux";
import { getAllArticle } from "../../store/actions/articleAction";

export default function Articles() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.article);
  const [showModalAddArticle, setShowModalAddArticle] = useState(false);
  const [showModalDeleteArticle, setShowModalDeleteArticle] = useState(false);

  const handleModalAddArticle = () => {
    setShowModalAddArticle(!showModalAddArticle);
  };

  const handleModalDeleteArticle = (id) => {
    setShowModalDeleteArticle(!showModalDeleteArticle);
    console.log(id)
  };

  const handleButtonDeleteModal = (value) => {
    if (value === 'yes') {
      setShowModalDeleteArticle(false)
      dispatch(getAllArticle())
    } else {
      setShowModalDeleteArticle(false)
    }
  }

  useEffect(() => {
    dispatch(getAllArticle());
  }, [dispatch]);

  return (
    <div>
      <LayoutDashboard title="Articles">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">Article List</h1>
          <div className="flex justify-between">
            <div className="bg-white w-full min-h-96 justify-between flex flex-col border rounded-xl shadow-xl">
              <div className="flex flex-col p-3 gap-4">
                <div className="flex justify-between items-center px-5">
                  <div className="flex items-cneter">
                    <input
                      type="text"
                      className="border h-9 px-3 py-1  rounded-l-full border-slate-300 w-72 focus:outline-none focus:border-blue-500"
                      placeholder="Search articles ..."
                    />
                    <button className="border h-9 rounded-r-full px-3 py-1 hover:bg-blue-500 hover:border-blue-500">
                      <FiSearch />
                    </button>
                  </div>
                  <button
                    onClick={handleModalAddArticle}
                    className="border hover:scale-110 transition duration-150 ease-in-out bg-green-500 py-1 px-2 rounded-lg text-black hover:font-semibold"
                  >
                    Create New Article
                  </button>
                </div>
                <hr className="border w-full" />
                <div className="flex flex-col gap-4">
                  {articles.article?.map((item, index) => (
                    <div
                      key={index}
                      className="border flex justify-between rounded-full px-10 py-3"
                    >
                      <div className="flex flex-col gap-2">
                        <button className="font-semibold text-xl text-black hover:text-blue-300 hover:underline">
                          {item.title}
                        </button>
                        <h1 className="text-xs text-gray-500">
                          {item.createdAt}
                        </h1>
                      </div>
                      <div className="flex items-center gap-5">
                        <button
                          onClick={() => handleModalDeleteArticle(item._id)}
                          className="bg-blue-500 text-sm m-1 text-white rounded-full border-blue-500 border hover:bg-white hover:text-blue-500 hover:scale-110 transition duration-150 ease-in-out"
                        >
                          <AiFillDelete className="h-10 p-2 w-10 " />
                        </button>
                        <button className="bg-blue-500 text-sm m-1 text-white rounded-full border-blue-500 border hover:bg-white hover:text-blue-500 hover:scale-110 transition duration-150 ease-in-out">
                          <RiEditFill className="h-10 p-2 w-10 " />
                        </button>
                      </div>
                      <Modal
                        openModal={showModalDeleteArticle}
                        closeModal={handleModalDeleteArticle}
                        title="Delet Article"
                      >
                        <div className="flex flex-col gap-5">
                          <h1>Are you sure to delete {item.title} ?</h1>
                          <div className="flex justify-center gap-5">
                            <button onClick={()=> handleButtonDeleteModal('yes')} className="bg-blue-300 hover:bg-blue-500 px-4 py-2 rounded-xl">
                              Yes
                            </button>
                            <button onClick={()=> handleButtonDeleteModal('no')} className="bg-gray-300 hover:bg-gray-500 px-4 py-2 rounded-xl">
                              No
                            </button>
                          </div>
                        </div>
                      </Modal>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutDashboard>

      {/* Modal */}
      <Modal
        openModal={showModalAddArticle}
        closeModal={handleModalAddArticle}
        title="Add Article"
      >
        <div>
          <AddArticle closeModal={handleModalAddArticle} />
        </div>
      </Modal>

      {/* End of modal */}
    </div>
  );
}
