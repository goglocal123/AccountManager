import React from "react";

export default function AddCommentModal() {
	return (
		<div
			class="modal fade"
			id="addComment-pop"
			tabindex="-1"
			role="dialog"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-body">
						<form style={{fontSize:"90%"}}>
							<div class="form-group">
								<label for="exampleFormControlTextarea1">
									Comments
								</label>
								<textarea
									class="form-control"
									id="exampleFormControlTextarea1"
									rows="5"
									placeholder="Add comment"
								></textarea>
							</div>

							<button
								style={{
									borderRadius: "10px",
									backgroundColor: "#646464",
									color: "white",
									height:"2.5rem",
									fontSize:"80%",
									border:"none"
								}}
							>
								Add comment
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
