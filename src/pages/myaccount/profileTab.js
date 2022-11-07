const ProfileTab = ({ name, email }) => {
  return (
    <div className="tab-content flex flex-col gap-5 bg-white rounded drop-shadow-md h-full p-5 active">
      <span className="block font-bold text-xl">My Account Information</span>
      <form className="grid grid-cols-12 gap-2" action="#">
        <div className="col-span-12 xs:col-span-6">
          <label className="flex flex-col text-sm">
            Name
            <input
              className="input h-10"
              type="text"
              placeholder={name}
              required
            />
          </label>
        </div>

        <div className="col-span-12">
          <label className="flex flex-col text-sm">
            Email
            <input
              className="input h-10"
              type="text"
              placeholder={email}
              required
            />
          </label>
        </div>
        {/* <div class="col-span-12">
          <button
            class="btn-effect w-full bg-primary-color text-white uppercase font-bold rounded-lg p-2"
            type="submit"
          >
            <span class="text-center">Save Changes</span>
          </button>
        </div> */}
      </form>
      <br></br>
      <div className="flex flex-col">
        <a
          className="btn-open-modal p-2 rounded-lg border bg-slate-100 hover:bg-slate-200 transition-all-300"
          href="/resetpassword"
          data-target=".change-password-modal"
        >
          <div className="flex justify-between items-center gap-2 pointer-events-none">
            <div>
              <i className="bi bi-lock-fill"></i>
              <span>Change Password</span>
            </div>
            <i className="bi bi-arrow-right-short flex text-primary-color text-2xl"></i>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProfileTab;
