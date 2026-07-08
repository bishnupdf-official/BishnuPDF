const SUPABASE_URL = "https://hewklezqkkdpeqchgoys.supabase.co";

const SUPABASE_KEY = "YAHAN_APNI_sb_publishable_KEY_PASTE_KARO";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const uploadBtn = document.getElementById("uploadBtn");
const pdfFile = document.getElementById("pdfFile");
const status = document.getElementById("status");

uploadBtn.onclick = async () => {

const file = pdfFile.files[0];

if(!file){
status.innerHTML="Please Select PDF";
return;
}

status.innerHTML="Uploading...";

const {error} = await supabaseClient.storage
.from("pdfs")
.upload(Date.now()+"-"+file.name,file);

if(error){
status.innerHTML="Upload Failed";
console.log(error);
return;
}

status.innerHTML="Upload Successful";

};
