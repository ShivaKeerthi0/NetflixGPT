import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: "key",
    dangerouslyAllowBrowser:true,
});


export default openai