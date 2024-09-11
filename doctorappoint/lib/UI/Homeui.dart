

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(Homeui());
}

class Homeui extends StatelessWidget {
  const Homeui({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Botnav(),
    );
  }
}


class Botnav extends StatefulWidget {
  const Botnav({super.key});

  @override
  State<Botnav> createState() => _botnavState();
}

class _botnavState extends State<Botnav> {
  @override
  Widget build(BuildContext context) {
    return const Placeholder();
  }
}
