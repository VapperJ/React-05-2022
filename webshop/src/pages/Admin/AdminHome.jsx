import { Link } from "react-router-dom";

function AdminHome() {
    return(
    <div>
        <Link to="/admin/halda-poode">
            <button className="btn btn-secondary">Halda Poode</button>
        </Link>
        <Link to="/admin/lisa-toode">
            <button className="btn btn-secondary" >Lisa toode</button>
        </Link>
        <Link to="/admin/halda-kategooriaid">
            <button className="btn btn-secondary" >Halda kategooriaid</button>
        </Link>
        <Link to="/admin/halda-tooteid">
            <button className="btn btn-secondary" >Halda tooteid</button>
        </Link>
    </div>
    )
}

export default AdminHome;