import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h2>General questions</h2>
      <table className="customer-service">
        <tr>
          <th>Customer service</th>
          <th className="open">open</th>
        </tr>
        <tr>
          <td>Monday to Friday</td>
          <td>08:00 - 19:00</td>
        </tr>
        <tr>
          <td>Telephone</td>
          <td className="telephone">+46 771 33 33 33 📞</td>
        </tr>
        <tr>
          <td>Email</td>
          <td className="email">service@instapcket.com</td>
        </tr>
      </table>

      <table className="home-deliveries">
        <tr>
          <th>Home deliveries</th>
          <th className="open">open</th>
        </tr>
        <tr>
          <td>Monday to Friday</td>
          <td>08:00 - 23:00</td>
        </tr>
        <tr>
          <td>Telephone</td>
          <td className="telephone">+46 771 33 33 33 📞</td>
        </tr>
      </table>
      <table className="businesses">
        <tr>
          <th>Businesses</th>
          <th className="open">open</th>
        </tr>
        <tr>
          <td>Monday to Friday</td>
          <td>08:00 - 17:00</td>
        </tr>
        <tr>
          <td>Telephone</td>
          <td className="telephone">+46 771 33 33 33 📞</td>
        </tr>
      </table>
    </div>
  );
}

export default Contact;
