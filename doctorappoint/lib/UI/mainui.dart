import 'package:doctorappoint/CRUD/FirebaseDataUpdate.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(Demo5());
}

class Demo5 extends StatelessWidget {
  const Demo5({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: DemoDashboard6(),
    );
  }
}

class DemoDashboard6 extends StatefulWidget {
  static String tag = '/DemoDashboard6';

  @override
  DemoDashboard6State createState() => DemoDashboard6State();
}

class DemoDashboard6State extends State<DemoDashboard6> {
  late List<Specialist> mList1;
  late List<Doctor> mList2;
  var _selectedIndex = 0;

  @override
  void initState() {
    super.initState();
    _selectedIndex = 0;
    mList1 = Specializations(); // Initialize mList1
    mList2 = Doctorslist();
  }

  // Method to get sample data
  List<Specialist> Specializations() {
    return [
      Specialist('assets/service1.png', 'Service 1'),
      Specialist('assets/service2.png', 'Service 2'),
      Specialist('assets/service3.png', 'Service 3'),
      Specialist('assets/service4.png', 'Service 4'),
      Specialist('assets/service4.png', 'Service 4'),
    ];
  }



  List<Doctor> Doctorslist() {
    return [
      Doctor('assets/offer1.png', 'Offer 1', 'Discount 10%'),
      Doctor('assets/offer2.png', 'Offer 2', 'Discount 20%'),
    ];
  }

  Widget db6Label(String text) {
    return Padding(
      padding: EdgeInsets.all(16.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          Text(text, style: TextStyle(fontSize: 18, color: Colors.black)),
          Text("View All", style: TextStyle(fontSize: 14, color: Colors.grey)),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    double expandHeight = 260;
    double w = MediaQuery.of(context).size.width;

    return Scaffold(
      body: NestedScrollView(
        // Header
        headerSliverBuilder: (BuildContext context, bool innerBoxIsScrolled) {
          return <Widget>[
            SliverAppBar(
              expandedHeight: expandHeight,
              floating: true,
              forceElevated: innerBoxIsScrolled,
              pinned: true,
              backgroundColor: innerBoxIsScrolled ? Colors.blue : Colors.blue,
              actionsIconTheme: IconThemeData(opacity: 0.0),
              // leading: IconButton(
              //   icon: Icon(Icons.arrow_back, color: Colors.white),
              //   onPressed: () {
              //     Navigator.of(context).pop();
              //   },
              // ),
              title: Container(
                height: 60,
                child: Padding(
                  padding: EdgeInsets.fromLTRB(16, 16, 8, 0),
                  child: Text("Username", style: TextStyle(color: Colors.white, fontSize: 24, fontWeight: FontWeight.bold)),
                ),
              ),
              flexibleSpace: FlexibleSpaceBar(
                background: Container(
                  height: 200,
                  margin: EdgeInsets.only(top: 70),
                  color: Colors.blue,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      Padding(
                        padding: EdgeInsets.fromLTRB(16, 16, 16, 0),
                        child: Text("Your Location", style: TextStyle(color: Colors.white)),
                      ),
                      Padding(
                        padding: EdgeInsets.fromLTRB(16, 2, 16, 0),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: <Widget>[
                            RichText(
                              text: TextSpan(
                                children: [
                                  WidgetSpan(
                                    child: Padding(
                                      padding: EdgeInsets.only(right: 4),
                                      child: Icon(Icons.location_on, color: Colors.white, size: 16),
                                    ),
                                  ),
                                  TextSpan(text: "San Francisco", style: TextStyle(fontSize: 18, color: Colors.white)),
                                ],
                              ),
                            ),
                            Text("Change", style: TextStyle(color: Colors.white, fontSize: 18)),
                          ],
                        ),
                      ),
                      Padding(
                        padding: EdgeInsets.all(16),
                        child: Container(
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.all(Radius.circular(16)),
                            color: Colors.white,
                          ),
                          child: TextField(
                            textAlignVertical: TextAlignVertical.center,
                            decoration: InputDecoration(
                              hintText: "Search",
                              border: InputBorder.none,
                              prefixIcon: Icon(Icons.search),
                              contentPadding: EdgeInsets.only(left: 26.0, bottom: 8.0, top: 8.0, right: 50.0),
                            ),
                          ),
                          alignment: Alignment.center,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ];
        },
        body: SingleChildScrollView(
          child: Container(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                // Specializations
                SizedBox(height: 8),
                Padding(
                  padding: EdgeInsets.fromLTRB(16.0, 16, 0, 16),
                  child: Text(
                    "Specialist",
                    style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  ),
                ),
                SizedBox(
                  height: w * 0.3,
                  child: ListView.builder(
                    scrollDirection: Axis.horizontal,
                    itemCount: mList1.length,
                    shrinkWrap: true,
                    physics: ScrollPhysics(),
                    itemBuilder: (context, index) {
                      return
                        Padding(
                        padding: const EdgeInsets.all(10),


                        child: D6TopService(mList1[index]),
                      );
                    },
                  ),
                ),


                // Doctors
                db6Label("Doctors"),
                SizedBox(
                  height: w * 0.4,
                  child: ListView.builder(
                    scrollDirection: Axis.horizontal,
                    itemCount: mList2.length,
                    shrinkWrap: true,
                    physics: ScrollPhysics(),
                    itemBuilder: (context, index) {
                      return D6Special(mList2[index]);
                    },
                  ),
                ),
                SizedBox(height: 16),
              ],
            ),
          ),
        ),
      ),

      // Footer
      bottomNavigationBar: Container(
        decoration: BoxDecoration(
          boxShadow: [BoxShadow(color: Colors.lightBlueAccent, offset: Offset.fromDirection(3, 1), spreadRadius: 1, blurRadius: 5)],
        ),
        child: BottomNavigationBar(
        backgroundColor: Colors.blueAccent,

          items: <BottomNavigationBarItem>[

            BottomNavigationBarItem(icon: Icon(Icons.home), label: "Home",),
            BottomNavigationBarItem(icon: Icon(Icons.pin_drop), label: "Nearby",),
            BottomNavigationBarItem(icon: Icon(Icons.person), label: "Profile",),
          ],
         // backgroundColor: Colors.black, // Optional: Set a background color for the nav bar
          selectedItemColor: Colors.black, // Set the color for the selected item label
          unselectedItemColor: Colors.white, // Set the color for the unselected item label


          currentIndex: _selectedIndex,
          onTap: (int index) {
            setState(() {
              _selectedIndex = index;
            });
          },
        ),
      ),
    );
  }

  void changeStatusColor(Color color) {
    // Simulate changing the status bar color (implementation might be different)
  }
}

// Dummy models and functions for compilation
class Specialist {
  final String img;
  final String name;

  Specialist(this.img, this.name);
}

class DB6Laundry {
  final String img;
  final String name;
  final String rating;
  final String location;

  DB6Laundry(this.img, this.name, this.rating, this.location);
}

class Doctor {
  final String img;
  final String title;
  final String subTitle;

  Doctor(this.img, this.title, this.subTitle);
}

// Sample data functions
List<Specialist> Specializations() {
  return [
    Specialist('assets/service1.png', 'Service 1'),
    Specialist('assets/service2.png', 'Service 2'),
    Specialist('assets/service3.png', 'Service 3'),
    Specialist('assets/service4.png', 'Service 4'),
  ];
}


List<Doctor> Doctorslist() {
  return [
    Doctor('assets/offer1.png', 'Offer 1', 'Discount 10%'),
    Doctor('assets/offer2.png', 'Offer 2', 'Discount 20%'),
  ];
}

class D6TopService extends StatelessWidget {
  final Specialist model;

  D6TopService(this.model);

  @override
  Widget build(BuildContext context) {
    var width = MediaQuery.of(context).size.width;
    return Container(
      margin: EdgeInsets.only(left: 16),
      child: Column(
        children: <Widget>[


          Container(
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: Colors.white,
              boxShadow: [BoxShadow(color: Colors.grey, blurRadius: 10, spreadRadius: 2)],
            ),
            width: width * 0.2,
            height: width * 0.2,
            padding: EdgeInsets.all(width * 0.05),
            child: Image.asset(model.img),
          ),
          SizedBox(height: 6),
          Text(model.name, style: TextStyle(color: Colors.grey[700])),
        ],
      ),
    );
  }
}

class D6Popular extends StatelessWidget {
  final DB6Laundry model;

  D6Popular(this.model);

  @override
  Widget build(BuildContext context) {
    var width = MediaQuery.of(context).size.width;
    return Container(
      width: width * 0.7,
      margin: EdgeInsets.only(left: 16, top: 8, bottom: 8),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.all(Radius.circular(10)),
        boxShadow: [BoxShadow(color: Colors.grey, blurRadius: 5, spreadRadius: 2)],
      ),
      child: ListView(
        shrinkWrap: true,
        physics: NeverScrollableScrollPhysics(),
        children: <Widget>[
          Padding(
            padding: EdgeInsets.fromLTRB(16, 0, 16, 0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Center(child: Image.asset(model.img, fit: BoxFit.fill, height: width * 0.2, width: width * 0.2)),
                SizedBox(height: 10),
                Divider(height: 0.5, color: Colors.grey, thickness: 0.5),
                SizedBox(height: 10),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: <Widget>[
                    Text(model.name, style: TextStyle(fontSize: 14)),
                    RichText(
                      text: TextSpan(
                        children: [
                          WidgetSpan(
                            child: Padding(
                              padding: EdgeInsets.symmetric(horizontal: 4.0),
                              child: Icon(Icons.star_border, color: Colors.yellow, size: 16),
                            ),
                          ),
                          TextSpan(text: model.rating, style: TextStyle(fontSize: 16, color: Colors.grey[700])),
                        ],
                      ),
                    ),
                  ],
                ),
                Text(model.location, style: TextStyle(color: Colors.grey[700])),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class D6Special extends StatelessWidget {
  final Doctor model;

  D6Special(this.model);

  @override
  Widget build(BuildContext context) {
    var width = MediaQuery.of(context).size.width;

    return Container(
      width: width * 0.7,
      margin: EdgeInsets.only(left: 16, top: 8, bottom: 8),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.all(Radius.circular(10)),
        boxShadow: [BoxShadow(color: Colors.grey, blurRadius: 5, spreadRadius: 2)],
      ),

      child: Padding(
        padding: EdgeInsets.all(16.0),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            Image.asset(model.img, height: width * 0.17, width: width * 0.2),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Text(model.title),
                Text(model.subTitle, style: TextStyle(color: Colors.blue, fontSize: 20, fontWeight: FontWeight.bold)),
                SizedBox(height: 8),
                GestureDetector(
                  child: Container(
                    padding: EdgeInsets.fromLTRB(16, 6, 16, 6),
                    child: Text("VIEW OFFERS".toUpperCase(), style: TextStyle(color: Colors.white)),
                    decoration: BoxDecoration(
                      color: Colors.blue,
                      borderRadius: BorderRadius.all(Radius.circular(6)),
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
