import Card from '../Card';
import Avatar from '../Avatar';

function Profile({ name, imageId, profession, awards, discovered }) {
  const person = { name, imageId };
  return (
    <Card>
      <section className="profile">
        <h2>{name}</h2>
        <Avatar person={person} size={70} />
        <ul>
          <li>
            <b>Profession: </b>
            {profession}
          </li>
          <li>
            <b>Awards: {awards.length} </b>
            ({awards.join(', ')})
          </li>
          <li>
            <b>Discovered: </b>
            {discovered}
          </li>
        </ul>
      </section>
    </Card>
  );
}

export default Profile;