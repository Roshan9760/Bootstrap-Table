$(document).ready(function(){
    $('#myTable').dataTable();
});


function showSuccessAlert() {
    Swal.fire({
      title: "Success!",
      text: "Your operation was successful.",
      icon: "success",
      confirmButtonText: "OK",
    });
}

function showDeleteAlert() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "The item has been deleted.",
          icon: "success",
        });
      }
    });
}

function downloadExcel() {
    // Logic to download Excel file
    alert('Excel download triggered');
}

function downloadCSV() {
    // Logic to download CSV file
    alert('CSV download triggered');
}
