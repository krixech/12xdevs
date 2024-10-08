import axios from "axios";
import { Loaders } from "./loaders";

async function getUserDetails() {
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
	return response.data;
}

export default async function User() {
  const userData = await getUserDetails();
  setTimeout(()=> {
    <Loaders/>
  }, 3000)

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
            <div>
              Name: {userData?.name}
            </div>

            {userData?.email}
        </div>
      </div>
    </div>
  );
}