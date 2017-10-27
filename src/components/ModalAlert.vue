<template>
  <div class="modal fade" id="modalAlert" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
        </div>
        <div class="modal-body">{{ description }}</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Ok</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title', 'description', 'open'],
    watch: {
      open() {
        $('#modalAlert').modal({})
      }
    },
    mounted() {
      $('#modalAlert').on('hidden.bs.modal', () => {
        this.$emit('close')
      })
    }
  }
</script>
