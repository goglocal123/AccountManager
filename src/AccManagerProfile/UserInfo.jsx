import React from "react";
import "./profile.css";

function UserInfo(props) {
	return (
		<div class="user-info-div">
			<div style={{ margin: "2rem"}}>
				<div style={{ display: "flex", justifyContent: "left"}}>
					<p style={{ width: "100%", fontSize: "110%" }}>{props.name}</p>
					<div style={{ marginLeft: "8%", width: "100%", fontSize: "95%" }}>
						<i class="fa-solid fa-user-check  field-icons"></i>
						<span class="field-labels">Account Id : </span>{" "}
						<span className="field-values">{props.id}</span>
					</div>
				</div>
				<div style={{ fontSize: "95%", marginTop: "3%" }}>
					<i class="fa-regular fa-calendar  field-icons"></i>
					<span class="field-labels">Date of Birth : </span>{" "}
					<span className="field-values">{props.id}</span>
				</div>
				<div style={{ fontSize: "95%", marginTop: "3%" }}>
					<i class="fa-regular fa-envelope field-icons"></i>
					<span class="field-labels">Mail : </span>{" "}
					<span className="field-values">{props.email}</span>
				</div>
				<div style={{ fontSize: "95%", marginTop: "3%" }}>
					<i class="fa-solid fa-phone-flip field-icons"></i>
					<span class="field-labels">Phone : </span>{" "}
					<span className="field-values">{props.phone}</span>
				</div>
			</div>
		</div>
	);
}

export default UserInfo;
