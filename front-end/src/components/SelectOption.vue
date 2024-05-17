<script type="text/javascript">
  
  import $ from "jquery";

  $(window).on('load',function(){
    setTimeout(function(){
      $('#myModal').modal('show');
    });
  });

</script>

<template>
  <main>
    <div class="modal fade bd-example-modal-lg" id="myModal">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Select</h4>
            </div>
            <div class="modal-body">
              <form name="option">
                <select name="select" class="custom-select">
                  <option selected="true" disabled="disabled" value="">--Please select an option and click continue--</option>
                  <option value="/employee-data-table">Employee</option>
                  <option value="/applicant-data-table">Applicant</option>
                </select>
              </form>
            </div>
            <div class="modal-footer">
              <input type="button" class="btn btn-success" onClick="window.location=document.option.select.options[document.option.select.selectedIndex].value" value="Continue">
            </div>
        </div>
    </div>
    </div> 
  </main>
</template> 