package com.projectquestionapp;

import android.os.Bundle;
import android.view.WindowManager;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;


public class MainActivity extends ReactActivity {
   @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
         getWindow().addFlags(WindowManager.LayoutParams.FLAG_SECURE);
    }
     @Override
  protected String getMainComponentName() {
    return "ProjectQuestionApp";
  }
}