import ironMan from '../../../images/Iron_Man.png';

export default function PeopleComments() {
    return (
        <div className='super-comment'>
            <div className="people-profile">
                <div className="people-title">
                    Tony Stark (Iron Man)
                </div>
                <img src={ironMan} alt="" className="profile-pic" />
            </div>
            <div className={"people-comment"}>
                <div className="actual-comment">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum vero porro quisquam quia nam! Sequi explicabo iusto, sapiente incidunt ut magni velit accusamus dicta, delectus, esse saepe temporibus porro blanditiis.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, rerum libero quod, repudiandae animi reprehenderit vitae quos voluptas est dicta nesciunt mollitia natus, quasi distinctio explicabo repellat eius non delectus!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi fugiat nostrum maxime amet consequuntur autem dolorem est voluptates, quasi pariatur perferendis, illum quibusdam. Maxime nisi distinctio magnam explicabo adipisci quidem.
                </div>
                <div className="time">
                    04:20
                </div>
            </div>
        </div>
    )
}