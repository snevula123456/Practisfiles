import axios from "axios";
// import Department from "./clasess";
import ItDepartment from "./clasess";
import person from "./Interface";
import { Personname } from "./Decoraters";
import { p1 } from "./Test";
import { merge, countAndDescribe, extractAndConvert } from "./generics";
console.log(p1);
// Timeout with Axios
setTimeout(() => {
    axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
        console.log(res.data);
    })
        .catch((err) => {
        console.log(err);
    });
    console.log("working");
    console.log("Settimeout is working");
}, 3000);
axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
    console.log(res.data);
})
    .catch((err) => {
    console.log(err);
});
console.log("working");
// const organization = new Department("R&D", 1)
// organization.printDepartDetails()
const It = new ItDepartment("ItDept", 100, 1, "testing", "e2");
It.showDept();
console.log(It.salary);
It.salary = 200;
console.log(It.salary);
const emp = ItDepartment.e1;
console.log(emp);
const rahul = new person("shyam", "developer");
console.log(rahul);
const mergeObj = merge({ name: "king" }, { age: 30 });
console.log(mergeObj.name);
console.log(mergeObj.age);
console.log(countAndDescribe("Hi There!"));
console.log(extractAndConvert({ fungus: "max" }, "fungus"));
// Decoraters
// const p1 = new Person()
// console.log(p1)
const withTemp = new Personname();
const e1 = document.getElementById("__tes");
console.log(e1);
// const p1 = new Personname()
console.log("testing today");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsc0NBQXNDO0FBQ3RDLE9BQU8sWUFBWSxNQUFNLFdBQVcsQ0FBQztBQUNyQyxPQUFPLE1BQU0sTUFBTSxhQUFhLENBQUM7QUFDakMsT0FBTyxFQUFnQixVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDeEQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUU1QixPQUFPLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXhFLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFaEIscUJBQXFCO0FBQ3JCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7SUFDZixLQUFLO1NBQ0gsR0FBRyxDQUFDLDRDQUE0QyxDQUFDO1NBRWpELElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBTyxFQUFFO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsQ0FBQztTQUNELEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBTyxFQUFFO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUN0QyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFVCxLQUFLO0tBQ0gsR0FBRyxDQUFDLDRDQUE0QyxDQUFDO0tBRWpELElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBTyxFQUFFO0lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLENBQUMsQ0FBQztLQUNELEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBTyxFQUFFO0lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbEIsQ0FBQyxDQUFDLENBQUM7QUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRXZCLGdEQUFnRDtBQUVoRCxvQ0FBb0M7QUFFcEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxZQUFZLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQy9ELEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRXZCLEVBQUUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRXZCLE1BQU0sR0FBRyxHQUFHLFlBQVksQ0FBQyxFQUFFLENBQUM7QUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUVqQixNQUFNLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUVuQixNQUFNLFFBQVEsR0FBRyxLQUFLLENBQ3JCLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUNoQixFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FDWCxDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBRTNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUU1RCxhQUFhO0FBRWIsMEJBQTBCO0FBQzFCLGtCQUFrQjtBQUVsQixNQUFNLFFBQVEsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO0FBRWxDLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNoQiw4QkFBOEI7QUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbi8vIGltcG9ydCBEZXBhcnRtZW50IGZyb20gXCIuL2NsYXNlc3NcIjtcbmltcG9ydCBJdERlcGFydG1lbnQgZnJvbSBcIi4vY2xhc2Vzc1wiO1xuaW1wb3J0IHBlcnNvbiBmcm9tIFwiLi9JbnRlcmZhY2VcIjtcbmltcG9ydCB7IHdpdGhUZW1wbGF0ZSwgUGVyc29ubmFtZSB9IGZyb20gXCIuL0RlY29yYXRlcnNcIjtcbmltcG9ydCB7IHAxIH0gZnJvbSBcIi4vVGVzdFwiO1xuXG5pbXBvcnQgeyBtZXJnZSwgY291bnRBbmREZXNjcmliZSwgZXh0cmFjdEFuZENvbnZlcnQgfSBmcm9tIFwiLi9nZW5lcmljc1wiO1xuXG5jb25zb2xlLmxvZyhwMSk7XG5cbi8vIFRpbWVvdXQgd2l0aCBBeGlvc1xuc2V0VGltZW91dCgoKSA9PiB7XG5cdGF4aW9zXG5cdFx0LmdldChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c1wiKVxuXG5cdFx0LnRoZW4oKHJlcyk6IGFueSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG5cdFx0fSlcblx0XHQuY2F0Y2goKGVycik6IGFueSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHRcdH0pO1xuXHRjb25zb2xlLmxvZyhcIndvcmtpbmdcIik7XG5cdGNvbnNvbGUubG9nKFwiU2V0dGltZW91dCBpcyB3b3JraW5nXCIpO1xufSwgMzAwMCk7XG5cbmF4aW9zXG5cdC5nZXQoXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNcIilcblxuXHQudGhlbigocmVzKTogYW55ID0+IHtcblx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG5cdH0pXG5cdC5jYXRjaCgoZXJyKTogYW55ID0+IHtcblx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHR9KTtcbmNvbnNvbGUubG9nKFwid29ya2luZ1wiKTtcblxuLy8gY29uc3Qgb3JnYW5pemF0aW9uID0gbmV3IERlcGFydG1lbnQoXCJSJkRcIiwgMSlcblxuLy8gb3JnYW5pemF0aW9uLnByaW50RGVwYXJ0RGV0YWlscygpXG5cbmNvbnN0IEl0ID0gbmV3IEl0RGVwYXJ0bWVudChcIkl0RGVwdFwiLCAxMDAsIDEsIFwidGVzdGluZ1wiLCBcImUyXCIpO1xuSXQuc2hvd0RlcHQoKTtcbmNvbnNvbGUubG9nKEl0LnNhbGFyeSk7XG5cbkl0LnNhbGFyeSA9IDIwMDtcbmNvbnNvbGUubG9nKEl0LnNhbGFyeSk7XG5cbmNvbnN0IGVtcCA9IEl0RGVwYXJ0bWVudC5lMTtcbmNvbnNvbGUubG9nKGVtcCk7XG5cbmNvbnN0IHJhaHVsID0gbmV3IHBlcnNvbihcInNoeWFtXCIsIFwiZGV2ZWxvcGVyXCIpO1xuY29uc29sZS5sb2cocmFodWwpO1xuXG5jb25zdCBtZXJnZU9iaiA9IG1lcmdlPHsgbmFtZTogc3RyaW5nIH0sIHsgYWdlOiBudW1iZXIgfT4oXG5cdHsgbmFtZTogXCJraW5nXCIgfSxcblx0eyBhZ2U6IDMwIH1cbik7XG5cbmNvbnNvbGUubG9nKG1lcmdlT2JqLm5hbWUpO1xuY29uc29sZS5sb2cobWVyZ2VPYmouYWdlKTtcblxuY29uc29sZS5sb2coY291bnRBbmREZXNjcmliZShcIkhpIFRoZXJlIVwiKSk7XG5cbmNvbnNvbGUubG9nKGV4dHJhY3RBbmRDb252ZXJ0KHsgZnVuZ3VzOiBcIm1heFwiIH0sIFwiZnVuZ3VzXCIpKTtcblxuLy8gRGVjb3JhdGVyc1xuXG4vLyBjb25zdCBwMSA9IG5ldyBQZXJzb24oKVxuLy8gY29uc29sZS5sb2cocDEpXG5cbmNvbnN0IHdpdGhUZW1wID0gbmV3IFBlcnNvbm5hbWUoKTtcblxuY29uc3QgZTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIl9fdGVzXCIpO1xuY29uc29sZS5sb2coZTEpO1xuLy8gY29uc3QgcDEgPSBuZXcgUGVyc29ubmFtZSgpXG5jb25zb2xlLmxvZyhcInRlc3RpbmcgdG9kYXlcIik7XG4iXX0=