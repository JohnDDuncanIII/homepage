#
# Makefile for simple archive management (1999.01.26) V C Hui
#

SHELL = /bin/sh

#
# directories
#
SRCDIR = .
TGZDIR = ..

#
# package parameters
#
VERSION = `cat eicons/VERSION`
DATE = `date +%Y%m%d.%H`
TGZ = $(VERSION)-$(DATE)-src.tgz

#
# shell commands
#
RM = \rm -f

#
# targets
#
all:

	
dist:
	(cd .. ; tar cvf - eicons | gzip -c9 > $(TGZ))

purge:
	$(RM) *~ */*~ */*/*~
