import 'package:firebase_core/firebase_core.dart';

// Define the Firebase options
class DefaultFirebaseOptions {
  static FirebaseOptions get currentPlatform {
    return FirebaseOptions(
      apiKey: 'AIzaSyBPa7AlAHc_izyUlGqZxxXlyGy6HdOMrtc',
      appId: '1:92677229412:android:f845ba9063db4a7b138871', // Use the correct appId
      messagingSenderId: '92677229412',
      projectId: 'doctorappoint-69368',
      storageBucket: 'doctorappoint-69368.appspot.com',
    );
  }

  // Optionally add an alternate configuration if needed
  static FirebaseOptions get alternatePlatform {
    return FirebaseOptions(
      apiKey: 'AIzaSyBPa7AlAHc_izyUlGqZxxXlyGy6HdOMrtc',
      appId: '1:92677229412:android:d637c67911157aaf138871', // Use the correct appId for the alternate configuration
      messagingSenderId: '92677229412',
      projectId: 'doctorappoint-69368',
      storageBucket: 'doctorappoint-69368.appspot.com',
    );
  }
}
