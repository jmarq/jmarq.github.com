#!/usr/bin/python2.7

import datetime
import os

d = datetime.datetime;
t = datetime.datetime.now();
year = t.year;
month = t.month;
day = t.day;
hour = t.hour;
minute = t.minute;
second = t.second;

year = str( t.year );
month= str( t.month );
if( len( month ) < 2 ):
	month = "0" + month;
day = str( day );
if( len( day ) < 2 ):
	day = "0" + day;
hour = str( hour );
if( len( hour ) < 2 ):
	hour = "0" + hour;
minute = str( minute );
if( len( minute ) < 2 ):
	minute = "0" + minute;
second = str( second );
if( len( second ) < 2 ):
	second = "0" + second;
dateString = year + "-" + month + "-" + day;
timeString = hour + ":" + minute + ":" + second;
print dateString + " " + timeString;
# got the date/time strings, now what?  need the title.
title = raw_input( "\nTitle of Blog Post:  " );
filenameTitle = raw_input( "\ntitleFor-File_name:  ");
fileType = raw_input( "post file extension (including the '.'): " );
filename = "_posts/" + dateString + "-" + filenameTitle + fileType;
theFile = open( filename , "w" );
theContent = "---\ntitle: " + title + "\nlayout: post\ndate: " + dateString + " " + timeString + "\n---\n";
theFile.write(theContent);
theFile.close();
os.system( "vim " + filename );
