export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const apiKey = useRuntimeConfig().public.googleApiKey;
  
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query.input}&types=(cities)&components=country:fr&key=AIzaSyCZ7TWIpBgy7GenLyxgfOn3_uqZ8qsFN6Q`;
  
    try {
      const response = await $fetch(url);
      return response;
    } catch (error) {

      throw createError({
        statusCode: error.response?.status || 500,
        statusMessage: error.message,
      });

    }
  });
  