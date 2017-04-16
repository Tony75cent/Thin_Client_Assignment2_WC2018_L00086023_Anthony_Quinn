<?xml version="1.0" encoding="UTF-8"?>

<!--
    Document   : fixtures.xsl
    Created on : 
    Author     : anthonyquinn
    Description:
        Purpose of transformation follows.
-->

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <!--  <xsl:output method="html"/>-->
    <xsl:output method="html"/>

    <!-- TODO customize transformation rules 
         syntax recommendation http://www.w3.org/TR/xslt 
    -->
    <xsl:template match="Fixtures">
        <table width="20%" border="2">
            <tr >
                <th>Match</th>
                <th>Location</th>
                <th>Date</th>
                <th>Result</th>
                <th> </th>


            </tr>
        
            <xsl:for-each select="FIXTURE">
                <xsl:sort select="DATE" order="descending" data-type="text"/>
                <tr> 
                    <td>
                        <xsl:value-of select="MATCH"/>
                    </td>
                    <td>
                        <xsl:value-of select="LOCATION"/>
                    </td>
                    <td>
                        <xsl:value-of select="DATE"/>
                    </td>
                    <td>
                        <xsl:value-of select="RESULT"/>
                    </td>
                    
                </tr>    
            </xsl:for-each>
        </table>
    </xsl:template>

</xsl:stylesheet>
