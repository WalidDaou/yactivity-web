<template>
    <div>
        <div class="font-Kanit ">
            <PartnerBanner />
            <div class="mt-[-290px] main-container pb-20">
                <PartnerForm />
            </div>
        </div>
    </div>
</template>
<script>

import PartnerBanner from '../components/banners/PartnerBanner.vue';
import PartnerForm from '../components/forms/PartnerForm.vue'

export default {
    components: {
        PartnerBanner,
        PartnerForm
    },
    data() {
        return {
            
        }
    }
}
</script>
