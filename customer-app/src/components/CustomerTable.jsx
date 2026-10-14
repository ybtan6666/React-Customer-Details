function CustomerTable({ customers }) {
  const handleView = (customer) => {
    console.log("View customer:", customer);
    alert(JSON.stringify(customer, null, 2));
  };

  const handleEdit = (customer) => {
    console.log("Edit customer:", customer);
  };

  const handleDelete = (customer) => {
    console.log("Delete customer:", customer);
  };

  return (
    <div className="table-card">
      <h2>
        Customer <b>Details</b>
      </h2>

      <table className="customer-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Pin Code</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {customers.length === 0 ? (
            <tr>
              <td colSpan="7" className="empty">
                No customers found.
              </td>
            </tr>
          ) : (
            customers.map((customer, index) => (
              <tr key={customer.id}>
                <td>{index + 1}</td>
                <td>{customer.name}</td>
                <td>{customer.address}</td>
                <td>{customer.city}</td>
                <td>{customer.pinCode}</td>
                <td>{customer.country}</td>
                <td className="actions">
                  <button
                    className="btn-view"
                    title="View"
                    onClick={() => handleView(customer)}
                  >
                    👁
                  </button>
                  <button
                    className="btn-edit"
                    title="Edit"
                    onClick={() => handleEdit(customer)}
                  >
                    ✎
                  </button>
                  <button
                    className="btn-delete"
                    title="Delete"
                    onClick={() => handleDelete(customer)}
                  >
                    🗑
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <p className="table-footer">
        Showing <b>{customers.length}</b> entries
      </p>
    </div>
  );
}

export default CustomerTable;
