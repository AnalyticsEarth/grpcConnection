# grpcConnection

This small extension allows for a connection to be added for connectors not accessible through the UI. This is the case when enabling and using the GRPC Protocol released for Qlik Core. The alternative to using this extension is to put the engine into Legacy Mode.

## How to use

1. Install Extension (download from here)
1. Create application and create a sheet
1. Add Extension to sheet
1. Enter a name for the connection
1. Give the connection a type (for example "JDBC")
1. Enter the connection string
1. Click "Create Connection"
1. Go to the script editor, (you may need to refresh the page if the connection does not appear)
1. As the connection is not a known type, you need to manually add the connection script.
1. Add `LIB CONNECT TO '<Connection Name>';` to your script and follow with the required query to the connection.
