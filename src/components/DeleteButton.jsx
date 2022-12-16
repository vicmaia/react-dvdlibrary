import { useHistory } from "react-router-dom";

function DeleteButton({ dvdId }){

    let history = useHistory();
    const url = `http://dvd-library.us-east-1.elasticbeanstalk.com/dvd/${dvdId}`;
    async function deleteDvd() {
        await fetch(url, {method: "DELETE"});
        history.go(0);
    }
    return (
        <button
      		className="bg-red-50 py-4 px-8 text-white hover:bg-gray-50 hover:border-red-400  hover:text-red-400 hover:shadow-2xl border-2"
      		onClick={deleteDvd}
            >
              Delete
        </button>
    );        
}
export default DeleteButton;
//p style={{cursor:'pointer'}}