import propTypes from "prop-types";
export default function User({
  name,
  surname,
  age,
  isLogedIn,
  friends,
  address,
}) {
  if (!isLogedIn) {
    return <div>Giriş Yapınız</div>;
  }
  return (
    <div>
      <h1>
        {" "}
        {name} {surname} {age} {address.title + "/" + address.zip}
      </h1>

      {friends
        ? friends.map((friend) => {
            return (
              <div key={friend.id}>
                <h4>{friend.name}</h4>
              </div>
            );
          })
        : null}
    </div>
  );
}
User.propTypes = {
  name: propTypes.string.isRequired,
  surname: propTypes.string.isRequired,
  age: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  isLogedIn: propTypes.bool.isRequired,
  friends: propTypes.array,
  address: propTypes.shape({
    title: propTypes.string,
    zip: propTypes.number,
  }),
};

User.defaultProps = {
  name: "isimsiz",
  isLogedIn: false,
};
