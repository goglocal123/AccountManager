import React from "react";

function AddContactModal() {
	return (
		<div
			class="modal fade"
			id="add-contact-PopUp"
			tabindex="-1"
			role="dialog"
			aria-labelledby="exampleModalCenterTitle"
			aria-hidden="true"
		>
			<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<div class="modal-body">
						<div style={{ width: "100%", display:"flex", justifyContent:"center" }}> <p>Add Contact</p> </div>
						
						<div style={{ width: "100%", display:"flex", justifyContent:"center" }}>
						
						<form style={{ width: "100%" }}>
							<div>
								<input placeholder="Name" className="add-contact-input" />
							</div>
							<div >
								<input placeholder="Name" className="add-contact-input" />
							</div>
							<div >
								<input placeholder="Name" className="add-contact-input" />
							</div>
						</form>
						</div>
					</div>
					<div class="modal-footer">
						<button
							type="button"
							class="btn btn-secondary"
							data-dismiss="modal"
						>
							Close
						</button>
						<button type="button" class="btn btn-primary">
							Save changes
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddContactModal;
