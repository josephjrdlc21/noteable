
export default function Footer(){
    return(
        <footer className="bg-[#ebe8e9] py-5 flex items-center justify-center text-sm text-muted-foreground px-5">
            Copyright © {new Date().getFullYear()} Joseph DLC. All rights reserved.
        </footer>
    );
}