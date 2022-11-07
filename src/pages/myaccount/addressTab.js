import { useNavigate } from "react-router-dom";

const AddressTab = ({ addresses }) => {
  const navigate = useNavigate();

  return (
    <div className="tab-content flex flex-col gap-5 bg-white rounded drop-shadow-md h-full p-5">
      <span className="block font-bold text-xl">Manage Addresses</span>

      <button
        className="btn-open-modal border btn-effect w-full uppercase font-bold rounded-md p-2 mb-8"
        data-target=".add-address-modal"
        onClick={() => {
          navigate("/address");
        }}
      >
        <span className="pointer-events-none">Add A New Address</span>
      </button>

      <ul className="flex flex-col gap-4">
        {addresses !== "undefined" ? (
          addresses?.map((address, idx) => (
            <li className="relative" key={idx}>
              <input
                className="sr-only peer"
                type="radio"
                value=""
                name="address"
                id="address-1"
                checked=""
              />
              <label
                className="flex flex-col gap-5 w-full border border-gray-300 rounded-md cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-primary-color peer-checked:ring-2 peer-checked:border-transparent"
                for="address-1"
              >
                <p className="mx-4 mt-2">
                  <span className="font-bold">{address.name}</span>
                  <br></br>
                  {address.phone}
                </p>
                <div className="text-md lg:text-lg mx-4">
                  <span className="block">{address.address}</span>
                  <span className="block">{address.city}</span>
                  <span className="block">{address.state}</span>
                </div>
                <div className="flex justify-end items-center gap-4 text-slate-400">
                  <div
                    className="btn-open-modal tippy tippy-edit hover:text-primary-color transition-all-300"
                    data-target=".edit-address-modal"
                  >
                    <i className="bi bi-pencil-fill flex pointer-events-none"></i>
                  </div>
                  <div
                    className="btn-open-modal tippy tippy-remove hover:text-primary-color transition-all-300"
                    data-target=".delete-modal"
                  >
                    <i className="bi bi-trash-fill flex pointer-events-none"></i>
                  </div>
                </div>
              </label>
            </li>
          ))
        ) : (
          <span>Add Your Address</span>
        )}
      </ul>

      <br></br>
    </div>
  );
};

export default AddressTab;
