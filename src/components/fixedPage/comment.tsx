import PeopleComments from "./PeopleComments/peopleComments";

export default function Comments() {
    return (
        <div className="comment-side">
            <div className="input-section">
                <textarea
                    name="comment-input"
                    id="c-Input"
                    //@ts-ignore
                    cols='36'
                    onFocus={e => {
                        const objective = document.querySelector('#c-Input');
                        // objective.style.backgroundImage = "red";
                    }}
                />
            </div>
            <PeopleComments />
        </div>
    );
}