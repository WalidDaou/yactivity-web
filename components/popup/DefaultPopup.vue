<template>
    <div v-if="isOpen" class="modal-overlay main-container" @click="closeModalOutside">
        <div class="modal">

            <div class="modal-content">
                <div class="modal-header">
                    <button @click="closeModal" class="pt-[20px]">
                        <img src="@/assets/svg/x-close.svg" alt="Icon" />
                    </button>
                    <div class="font-semibold font-25px relative top-[4px] text-center px-5">{{ title }}</div>
                </div>
                <div class="modal-body">
                    <slot></slot> <!-- Your custom content goes here -->
                </div>
            </div>


        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        isOpen: Boolean,
        title: String
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
        closeModalOutside(event) {
            if (!event.target.closest('.modal')) {
                this.closeModal();
            }
        }
    }
};
</script>
  
<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1100;
}

.modal {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 20px;
    padding-top: 10px;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 20px;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.modal-content {
  max-width: 550px;
  width: 100%;
}


.modal-header {
    display: flex;
    gap: 0px;
    align-items: baseline;
}

.modal-header h2 {
    margin: 0;
}

.modal-body {
    margin-top: 10px;
}
</style>
  